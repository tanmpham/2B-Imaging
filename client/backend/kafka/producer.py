from apscheduler.schedulers.background import BackgroundScheduler
import yaml
from pykafka import KafkaClient
import time


with open("../app_conf.yml", "r") as f:
    appConfig = yaml.safe_load(f.read())


hostname = "%s:%d" % (
    appConfig["events"]["hostname"],
    appConfig["events"]["port"],
)

for connecting in range(appConfig["max_tries"]):
    try:
        print("start connection")
        client = KafkaClient(hosts=hostname)
        print("client connected")
        topic = client.topics[str.encode(appConfig["events"]["topic"])]
        print("connected")
    except Exception:
        time.sleep(appConfig["sleep"])
        print(f"[producer]: Numbers of fail connection to Kafka: {connecting}")
        continue
