from apscheduler.schedulers.background import BackgroundScheduler
import yaml
from pykafka import KafkaClient
from pykafka.common import OffsetType
import time
from flask import Blueprint
from constants.queue_svc_constants import producerID, queue_json, queue_received
import json
import os
import datetime
import logging
import logging.config
from threading import Thread
from queue_svc.db_actions.imagetags import add_tag
import uuid
import queue

queue_bp = Blueprint("queue", __name__)


with open("app_conf.yml", "r") as f:
    appConfig = yaml.safe_load(f.read())

with open("log_conf.yml", "r") as f:
    log_config = yaml.safe_load(f.read())
    logging.config.dictConfig(log_config)

logger = logging.getLogger("basicLogger")
logger.setLevel(logging.INFO)


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


# Create a Queue object
q_producer = queue.Queue()
q_consumer = queue.Queue()


def connect_kafka():
    # for connecting in range(appConfig["max_tries"]):
    try:
        client = KafkaClient(hosts=hostname)
        topic = client.topics[str.encode(appConfig["events"]["topic"])]
        # Put the topic in the queue
        q_producer.put(topic)
        q_consumer.put(topic)
        return
    except Exception as err:
        print("[connect_kafka]: Fail connection.")
        # time.sleep(appConfig["reconnect_sleep"])
        # continue


def produce_msg():
    try:
        topic = q_producer.get_nowait()
        producer = topic.get_sync_producer()
        print(f"[produce_msg]: Connected to Kafka.")
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
                except Exception as err:
                    logger.info("[producer]: Error while producing message.")
            else:
                print("No new messages")
    except Exception as err:
        logger.info("[producer]: No connection to Kafka.")


def save_msg(message):
    file_data = {"queue_received": []}

    # Check if file exists
    if os.path.isfile(queue_received):
        with open(queue_received, "r") as file:
            # Load existing data into a dict.
            file_data = json.load(file)
            # Sets file's current position at offset.
            file.seek(0)
        # Join new_data with file_data inside queue
        file_data["queue_received"].append(message)

        with open(queue_received, "w") as file:
            # Convert back to json and write to file.
            json.dump(file_data, file, indent=2)
    else:
        file_data["queue_received"].append(message)
        with open(queue_received, "w") as file:
            # Convert back to json and write to file.
            json.dump(file_data, file, indent=2)


def process_msg(messages):
    for item in messages:
        if item["action"] == "add_tag":
            add_tag(item["payload"])


def read_received_msg():
    # Check if file exists
    if os.path.isfile(queue_received):
        with open(queue_received, "r") as file:
            file_data = json.load(file)
        if file_data != {"queue_received": []}:
            for i, queue_item in enumerate(file_data["queue_received"]):
                if i > 0:
                    if (
                        file_data["queue_received"][i - 1]["msgID"]
                        == queue_item["msgID"]
                    ):
                        logger.info("[read_received_msg]: Duplicated messages.")
                    else:
                        process_msg(queue_item["queue"])
                else:
                    process_msg(queue_item["queue"])

            with open(queue_received, "w") as file:
                # Convert back to json and write to file.
                json.dump({"queue_received": []}, file, indent=2)

        else:
            print("[read_received_msg]: No new messages")
    else:
        logger.info("[read_received_msg]: File is not existed")


def consume_msg():
    while True:
        try:
            topic = q_consumer.get_nowait()
            # Create a consume on a consumer group, that only reads new messages
            # (uncommitted messages) when the service re-starts (i.e., it doesn't
            # read all the old messages from the history in the message queue).

            consumer = topic.get_simple_consumer(
                consumer_group=json.dumps(producerID).encode("utf-8"),
                reset_offset_on_start=False,
                auto_offset_reset=OffsetType.LATEST,
            )

            print(f"[consume_msg]: Connected to Kafka.")

            for msg in consumer:
                msg_str = msg.value.decode("utf-8")
                msg = json.loads(msg_str)
                logger.info("Consumed Message: %s" % msg)

                if msg["producerID"] == producerID:
                    logger.info("[consume_msg]: Same producer id in this client")
                else:
                    save_msg(msg)

                # Commit the new message as being read
                consumer.commit_offsets()

        except Exception as err:
            logger.info(f"[consume_msg]: No connection to Kafka.")
            time.sleep(appConfig["reconnect_sleep"])


def init_scheduler():
    sched = BackgroundScheduler(daemon=True)
    sched.add_job(
        connect_kafka,
        "interval",
        seconds=appConfig["reconnect_sleep"],
    )
    sched.add_job(
        produce_msg,
        "interval",
        seconds=appConfig["scheduler"]["period_sec"],
    )

    sched.add_job(
        read_received_msg,
        "interval",
        seconds=appConfig["scheduler"]["period_sec"],
    )

    sched.start()


# init_scheduler()

# t1 = Thread(target=connect_kafka)
# t1.setDaemon(True)
# t1.start()

# t2 = Thread(target=consume_msg)
# t2.setDaemon(True)
# t2.start()
