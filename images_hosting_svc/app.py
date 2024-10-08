from flask import Flask, abort, request
from flask_cors import CORS
from urllib.parse import urlparse
import yaml


app_conf_path = "app_conf.yml"

with open(app_conf_path, "r") as f:
    appConfig = yaml.safe_load(f.read())


class SecuredStaticFlask(Flask):
    def send_static_file(self, filename):
        # Check if the referrer is '<frontend_url>'
        referrer = request.headers.get("Referer")

        if referrer:
            url = urlparse(referrer)
            if (
                url.netloc == appConfig["client-frontend-url"]
                or url.netloc == appConfig["client-backend-url"]
                or url.netloc == appConfig["server-url"]
            ):
                return super(SecuredStaticFlask, self).send_static_file(filename)
        abort(403)  # Forbidden access


app = SecuredStaticFlask(
    __name__, static_folder="patientimages", static_url_path="/gallery"
)


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


app.run(host="0.0.0.0", port=4010, debug=True)
