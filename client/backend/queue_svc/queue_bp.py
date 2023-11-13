from apscheduler.schedulers.background import BackgroundScheduler
import yaml
from pykafka import KafkaClient
from pykafka.common import OffsetType
import time
from flask import Blueprint
from constants.producer_id import queue_json, producerID
import json
import os
import datetime
import logging
import logging.config
from threading import Thread
from queue_svc.db_actions.imagetags import add_tag
import uuid

queue_bp = Blueprint("queue", __name__)


with open("app_conf.yml", "r") as f:
    appConfig = yaml.safe_load(f.read())

with open("log_conf.yml", "r") as f:
    log_config = yaml.safe_load(f.read())
    logging.config.dictConfig(log_config)

logger = logging.getLogger("basicLogger")


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


def connect_kafka():
    for connecting in range(appConfig["max_tries"]):
        try:
            client = KafkaClient(hosts=hostname)
            topic = client.topics[str.encode(appConfig["events"]["topic"])]
            return topic
        except Exception:
            print(f"[producer]: Numbers of fail connection to Kafka: {connecting}")
            time.sleep(appConfig["reconnect_sleep"])
            continue


def produce_msg():
    try:
        topic = connect_kafka()
        producer = topic.get_sync_producer()
        # Check if file exists
        if os.path.isfile(queue_json):
            with open(queue_json, "r") as file:
                file_data = json.load(file)

            if file_data != {"queue": []}:
                msg = file_data | {
                    "msgID": str(uuid.uuid4()),
                    "producerID": producerID,
                    "createdAt": datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S"),
                }

                msg_str = json.dumps(msg)
                try:
                    producer.produce(msg_str.encode("utf-8"))
                    with open(queue_json, "w") as file:
                        # Convert back to json and write to file.
                        json.dump({"queue": []}, file, indent=2)
                    logger.info(f"[producer]: Produces message successfully!")
                except Exception:
                    logger.info(f"[producer]: Error while producing message.")
            else:
                print("No new messages")
    except Exception:
        logger.info(f"[producer]: Cannot sync producer.")


# readed_msg_id = ""


def process_msg(message):
    items = message["queue"]
    for item in items:
        if item["action"] == "add_tag":
            add_tag(item["payload"])


def consume_msg():
    try:
        topic = connect_kafka()
        # Create a consume on a consumer group, that only reads new messages
        # (uncommitted messages) when the service re-starts (i.e., it doesn't
        # read all the old messages from the history in the message queue).

        consumer = topic.get_simple_consumer(
            consumer_group=json.dumps(producerID).encode("utf-8"),
            reset_offset_on_start=False,
            auto_offset_reset=OffsetType.LATEST,
        )

        # Track messages consumed
        # a = 0

        for msg in consumer:
            msg_str = msg.value.decode("utf-8")
            msg = json.loads(msg_str)
            logger.info("Consumed Message: %s" % msg)

            # a += 1
            # logger.info(f"single count: {a}")

            if msg["producerID"] == producerID:
                logger.info("[consumer]: Same producer id in this client")
            else:
                process_msg(msg)

            # Commit the new message as being read
            consumer.commit_offsets()

        # logger.info(f"Total: {a}")
    except Exception:
        logger.info(f"[consumer]: Cannot connect to the consumer group.")


def init_scheduler():
    sched = BackgroundScheduler(daemon=True)
    sched.add_job(
        produce_msg,
        "interval",
        seconds=appConfig["scheduler"]["period_sec"],
    )

    sched.start()


init_scheduler()

t1 = Thread(target=consume_msg)
t1.setDaemon(True)
t1.start()
