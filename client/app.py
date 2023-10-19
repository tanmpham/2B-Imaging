from flask import Flask, abort, request
from flask_cors import CORS
from urllib.parse import urlparse
import yaml

with open("app_conf.yml", "r") as f:
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
            ):
                return super(SecuredStaticFlask, self).send_static_file(filename)
        abort(403)  # Forbidden access


app = SecuredStaticFlask(
    __name__, static_folder="patientimages", static_url_path="/gallery"
)
CORS(app, origins=[appConfig["client-frontend-url"], appConfig["client-backend-url"]])


@app.route("/")
def hello():
    return "Hello, World!"


app.run(host="0.0.0.0", port=4200, debug=True)
