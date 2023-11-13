from apscheduler.schedulers.background import BackgroundScheduler
import yaml
from pykafka import KafkaClient
import time
from flask import Blueprint
from constants.producer_id import queue_json
import json
import os

queue_bp = Blueprint("queue", __name__)


with open("app_conf.yml", "r") as f:
    appConfig = yaml.safe_load(f.read())


# function to add to JSON
def queue_up(new_data, filename=queue_json):
    file_data = {"queue": []}

    # Check if file exists
    if os.path.isfile(filename):
        with open(filename, "r") as file:
            # Load existing data into a dict.
            file_data = json.load(file)
            # Sets file's current position at offset.
            file.seek(0)
        # Join new_data with file_data inside queue
        file_data["queue"].append(new_data)

        with open(filename, "w") as file:
            # Convert back to json and write to file.
            json.dump(file_data, file, indent=2)
    else:
        file_data["queue"].append(new_data)
        with open(filename, "w") as file:
            # Convert back to json and write to file.
            json.dump(file_data, file, indent=2)


hostname = "%s:%d" % (
    appConfig["events"]["hostname"],
    appConfig["events"]["port"],
)


def producer(topic):
    producer = topic.get_sync_producer()
    # Check if file exists
    if os.path.isfile(queue_json):
        with open(queue_json, "r") as file:
            file_data = json.load(file)

        print(file_data)

    # with open(queue_json, "w") as file:
    #     # Convert back to json and write to file.
    #     json.dump({"queue": []}, file, indent=2)


def process_messages():
    for connecting in range(appConfig["max_tries"]):
        try:
            client = KafkaClient(hosts=hostname)
            topic = client.topics[str.encode(appConfig["events"]["topic"])]
            break
        except Exception:
            time.sleep(appConfig["sleep"])
            print(f"[producer]: Numbers of fail connection to Kafka: {connecting}")
            continue
    producer(topic)


def init_scheduler():
    sched = BackgroundScheduler(daemon=True)
    sched.add_job(
        process_messages, "interval", seconds=appConfig["scheduler"]["period_sec"]
    )
    sched.start()


init_scheduler()
