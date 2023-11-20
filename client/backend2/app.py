from flask import Flask, abort, request
from flask_cors import CORS
from urllib.parse import urlparse
import yaml
import sqlite3
from controllers.patientimages import patientimages_bp
from controllers.imagetags import imagetags_bp
from controllers.imagenotes import imagenotes_bp
from controllers.patients import patients_bp
from queue_svc.queue_bp import queue_bp

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


app = SecuredStaticFlask(
    __name__, static_folder="patientimages", static_url_path="/gallery"
)
CORS(
    app,
    origins=[
        appConfig["client-frontend-url"],
        appConfig["server-url"],
    ],
)

app.register_blueprint(patients_bp)
app.register_blueprint(patientimages_bp)
app.register_blueprint(imagetags_bp)
app.register_blueprint(imagenotes_bp)
app.register_blueprint(queue_bp)


@app.route("/")
def home():
    return "Restricted server!", 400


app.run(host="0.0.0.0", port=4400, debug=True)
