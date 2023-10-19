from flask import Flask, abort, request
from flask_cors import CORS
from urllib.parse import urlparse
import yaml
import mysql.connector

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
CORS(
    app,
    origins=[
        appConfig["client-frontend-url"],
        appConfig["client-backend-url"],
    ],
)

db_config = {
    "host": "localhost",
    "user": "root",
    "password": appConfig["sql-pass"],
    "database": "eyecameradb",
}


@app.route("/")
def hello():
    return "Hello, World!"


@app.route("/patientimages", methods=["GET"])
def fetchAll():
    connection = mysql.connector.connect(**db_config)

    cursor = connection.cursor()

    sql_query = f"""SELECT * FROM eyecameradb.patientimages;"""
    cursor.execute(sql_query)
    query_result = cursor.fetchall()

    # Commit changes and close the connection
    connection.commit()
    cursor.close()
    connection.close()

    responseData = {
        "ImageID": query_result[0][0],
        "PatientID": query_result[0][1],
        "ImageData": query_result[0][2],
        "IsRightEye": query_result[0][3],
        "Annotation": query_result[0][4],
        "ThumbnailData": query_result[0][5],
        "ImageName": query_result[0][6],
        "DateCreated": query_result[0][7],
    }

    return responseData


app.run(host="0.0.0.0", port=4000, debug=True)
