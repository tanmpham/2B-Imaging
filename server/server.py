from flask import Flask, abort, request
from flask_cors import CORS
from urllib.parse import urlparse


class SecuredStaticFlask(Flask):
    def send_static_file(self, filename):
        # Check if the referrer is '<frontend_url>'
        referrer = request.headers.get("Referer")
        if referrer:
            url = urlparse(referrer)
            if url.netloc == "localhost:3000":
                return super(SecuredStaticFlask, self).send_static_file(filename)
        abort(403)  # Forbidden access


app = SecuredStaticFlask(
    __name__, static_folder="patientimages", static_url_path="/gallery"
)
CORS(app, origins=["http://localhost:3000"])


@app.route("/")
def hello():
    return "Hello, World!"


app.run(host="0.0.0.0", port=4000, debug=True)
