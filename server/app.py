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

    sql_query = (
        f"""SELECT * FROM eyecameradb.patientimages ORDER BY DateCreated DESC;"""
    )
    cursor.execute(sql_query)
    query_result = cursor.fetchall()

    # Commit changes and close the connection
    connection.commit()
    cursor.close()
    connection.close()

    responseData = []

    for image in query_result:
        parts = image[6].split(".")
        fileType = parts[len(parts) - 1]
        responseData.append(
            {
                "ImageID": image[0],
                "PatientID": image[1],
                "ImageData": image[2],
                "IsRightEye": image[3],
                "Annotation": image[4],
                "ThumbnailData": image[5],
                "ImageName": image[6],
                "FileType": fileType,
                "DateCreated": image[7],
            }
        )

    return responseData


# set up api for patient images
# Fetch all patients
@app.route("/patients", methods=["GET"])
def get_all_patients():
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    sql_query = """SELECT * FROM patients;"""
    cursor.execute(sql_query)

    query_result = cursor.fetchall()
    cursor.close()
    connection.close()

    patients = [
        {
            "PatientID": patient[0],
            "FirstName": patient[1],
            "LastName": patient[2],
            "DateofBirth": patient[3],
        }
        for patient in query_result
    ]
    return patients


# Fetch a single patient by ID
@app.route("/patients/<int:patient_id>", methods=["GET"])
def get_one_patient(patient_id):
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    sql_query = """SELECT * FROM patients WHERE PatientID = %s;"""
    cursor.execute(sql_query, (patient_id,))

    query_result = cursor.fetchone()
    cursor.close()
    connection.close()

    if query_result is None:
        return {"message": "Patient not found"}, 404

    patient = {
        "PatientID": query_result[0],
        "FirstName": query_result[1],
        "LastName": query_result[2],
        "DateofBirth": query_result[3],
    }
    return patient


# Get all tags
@app.route("/tags", methods=["GET"])
def get_tags():
    image_id = request.args.get("image-id")

    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    if not image_id:
        sql_query = """SELECT imagetags.TagID, imagetags.Tag, imagetags.UseCount FROM imagetags;"""
        cursor.execute(sql_query)
    else:
        sql_query = """
          SELECT imagetags.TagID, imagetags.Tag, imagetags.UseCount
          FROM imagetags
          INNER JOIN imagetagslist ON imagetags.TagID = imagetagslist.TagsID
          WHERE imagetagslist.ImageID = %s;
        """
        cursor.execute(sql_query, (image_id,))

    query_result = cursor.fetchall()

    cursor.close()
    connection.close()

    tags = [
        {"TagID": tag[0], "Tag": tag[1], "UseCount": tag[2]} for tag in query_result
    ]
    return tags


app.run(host="0.0.0.0", port=4000, debug=True)
