from flask import Flask, abort, request
from flask_cors import CORS
from urllib.parse import urlparse
import yaml
import sqlite3

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
                or url.netloc == appConfig["server-url"]
            ):
                return super(SecuredStaticFlask, self).send_static_file(filename)
        abort(403)  # Forbidden access


app = SecuredStaticFlask(
    __name__, static_folder="patientimages", static_url_path="/gallery"
)
CORS(app, origins=[appConfig["client-frontend-url"], appConfig["server-url"]])


@app.route("/")
def hello():
    return "Hello, World!"


@app.route("/patientimages", methods=["GET"])
def fetchAll():
    connection = sqlite3.connect("eyecameradb.sqlite")

    cursor = connection.cursor()

    sql_query = f"""SELECT * FROM patientimages ORDER BY DateCreated DESC;"""
    cursor.execute(sql_query)
    query_result = cursor.fetchall()

    # Commit changes and close the connection
    connection.commit()
    cursor.close()
    connection.close()

    responseData = []

    for i, image in enumerate(query_result):
        dateLabel = image[7]
        mediaList = {image[7]: {}}

        if i == 0:
            responseData.append(
                {
                    "ImageID": image[0],
                    "PatientID": image[1],
                    "ImageData": image[2],
                    "IsRightEye": image[3],
                    "Annotation": image[4],
                    "ThumbnailData": image[5],
                    "ImageName": image[6],
                    "DateCreated": dateLabel,
                }
            )

    return responseData


app.run(host="0.0.0.0", port=4200, debug=True)
