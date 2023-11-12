from apscheduler.schedulers.background import BackgroundScheduler
import yaml
from pykafka import KafkaClient
import time
from flask import Blueprint
from constants.producer_id import producerID

queue_bp = Blueprint("queue", __name__)


with open("app_conf.yml", "r") as f:
    appConfig = yaml.safe_load(f.read())


hostname = "%s:%d" % (
    appConfig["events"]["hostname"],
    appConfig["events"]["port"],
)


def producer():
    for connecting in range(appConfig["max_tries"]):
        try:
            client = KafkaClient(hosts=hostname)
            topic = client.topics[str.encode(appConfig["events"]["topic"])]
            print("connected")
        except Exception:
            time.sleep(appConfig["sleep"])
            print(f"[producer]: Numbers of fail connection to Kafka: {connecting}")
            continue


def process_messages():
    print(producerID)
    producer()


def init_scheduler():
    sched = BackgroundScheduler(daemon=True)
    sched.add_job(
        process_messages, "interval", seconds=appConfig["scheduler"]["period_sec"]
    )
    sched.start()


init_scheduler()
