from flask import Flask, abort, request
from flask_cors import CORS
from urllib.parse import urlparse
import yaml
from pykafka import KafkaClient
import time
import json


with open("app_conf.yml", "r") as f:
    appConfig = yaml.safe_load(f.read())


class SecuredStaticFlask(Flask):
    def send_static_file(self, filename):
        # Check if the referrer is '<frontend_url>'
        referrer = request.headers.get("Referer")
        if referrer:
            url = urlparse(referrer)
            # if (
            #     url.netloc == appConfig["client-frontend-url"]
            #     or url.netloc == appConfig["server-url"]
            # ):
            return super(SecuredStaticFlask, self).send_static_file(filename)
        abort(403)  # Forbidden access


app = SecuredStaticFlask(__name__)
CORS(
    app,
    origins=[
        appConfig["client-frontend-url"],
        appConfig["client-backend-url"],
        appConfig["server-url"],
    ],
)


@app.route("/")
def home():
    return "Restricted server!", 400


def produce_messages(filename="../kafka/queue.json"):
    with open(filename, "r") as file:
        file_data = json.load(file)


def producer():
    hostname = "%s:%d" % (
        appConfig["events"]["hostname"],
        appConfig["events"]["port"],
    )

    for connecting in range(appConfig["max_tries"]):
        try:
            client = KafkaClient(hosts=hostname)
            topic = client.topics[str.encode(appConfig["events"]["topic"])]
            produce_messages()
        except Exception:
            time.sleep(appConfig["sleep"])
            print(f"[producer]: Numbers of fail connection to Kafka: {connecting}")
            continue


app.run(host="0.0.0.0", port=4600, debug=True)
