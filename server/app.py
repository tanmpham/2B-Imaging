from flask import Flask, abort, request, make_response, jsonify
from flask_cors import CORS
from urllib.parse import urlparse
import yaml
import mysql.connector
from datetime import datetime
from dateutil.parser import parse


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
def fetchAllImages():
    tag_id = request.args.get("tag-id")
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        if not tag_id:
            sql_query = f"""SELECT * FROM patientimages ORDER BY DateCreated DESC;"""
            cursor.execute(sql_query)
        else:
            # Get all images in a tag
            sql_query = """
          SELECT *
          FROM patientimages
          INNER JOIN imagetagslist ON patientimages.ImageID = imagetagslist.ImageID
          WHERE imagetagslist.TagsID = %s;
          """
            cursor.execute(sql_query, (tag_id,))

        query_result = cursor.fetchall()

        # Commit changes and close the connection
        connection.commit()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[fetchAllImages]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

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


# add a new tag
@app.route("/imagetags", methods=["POST"])
def add_tag():
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        tag_name = request.json["Tag"]
        image_id = request.json["ImageID"]

        sql_query = (
            """INSERT INTO imagetags (Tag, ImageID, UseCount) VALUES (%s, %s, %s);"""
        )

        cursor.execute(sql_query, (tag_name, image_id, 1))

        connection.commit()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[add_tag]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    return {"message": "Tag added"}, 201


# Get tags
@app.route("/tags", methods=["GET"])
def get_tags():
    image_id = request.args.get("image-id")
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        if not image_id:
            # Get all tags
            sql_query = """SELECT imagetags.TagID, imagetags.Tag, imagetags.UseCount FROM imagetags;"""
            cursor.execute(sql_query)
        else:
            # Get specific tags in an image
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
    except mysql.connector.Error as err:
        error = f"[get_tags]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    tags = [
        {"TagID": tag[0], "Tag": tag[1], "UseCount": tag[2]} for tag in query_result
    ]
    return tags


# Update a tag
@app.route("/imagetags/<int:TagID>", methods=["PATCH"])
def update_tag(TagID):
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        new_tag_name = request.json["Tag"]
        sql_query = """UPDATE imagetags SET Tag = %s, UseCount = UseCount + 1 WHERE TagID = %s;"""

        cursor.execute(sql_query, (new_tag_name, TagID))
        connection.commit()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[update_tag]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    return {"message": "Tag updated"}


# Delete a tag
@app.route("/imagetags/<int:TagID>", methods=["DELETE"])
def delete_tag(TagID):
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        sql_query = """DELETE FROM imagetags WHERE TagID = %s;"""
        cursor.execute(sql_query, (TagID,))

        connection.commit()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[delete_tag]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    return {"message": "Tag deleted"}


# Add a new note
@app.route("/imagenotes", methods=["POST"])
def add_note():
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        note_content = request.json["Note"]
        image_id = request.json["ImageID"]
        note_created_at = request.json["NoteCreatedAt"]

        sql_query = """INSERT INTO imagenotes (Note, ImageID, NoteCreatedAt) VALUES (%s, %s, %s);"""
        cursor.execute(sql_query, (note_content, image_id, note_created_at))

        connection.commit()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[add_note]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    return {"message": "Note added"}, 201


# Get all notes
@app.route("/imagenotes", methods=["GET"])
def get_notes():
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()
        image_id = request.args.get("image-id")

        if not image_id:
            sql_query = """SELECT * FROM imagenotes;"""
            cursor.execute(sql_query)
        else:
            sql_query = """SELECT * FROM imagenotes WHERE ImageID = %s;"""
            cursor.execute(sql_query, (image_id,))

        query_result = cursor.fetchall()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[get_notes]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    notes = [
        {
            "NoteID": note[0],
            "Note": note[1],
            "NoteCreatedAt": note[2],
            "ImageID": note[3],
        }
        for note in query_result
    ]
    return {"notes": notes}


# Update a note
@app.route("/imagenotes/<int:NoteID>", methods=["PATCH"])
def update_note(NoteID):
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        new_content = request.json["Note"]

        sql_query = """UPDATE imagenotes SET Note = %s WHERE NoteID = %s;"""
        cursor.execute(sql_query, (new_content, NoteID))

        connection.commit()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[update_note]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    return {"message": "Note updated"}


# Delete a note
@app.route("/imagenotes/<int:NoteID>", methods=["DELETE"])
def delete_note(NoteID):
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        sql_query = """DELETE FROM imagenotes WHERE NoteID = %s;"""
        cursor.execute(sql_query, (NoteID,))

        connection.commit()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[delete_note]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    return {"message": "Note deleted"}


# set up api for patient
# Fetch all patients
@app.route("/patients", methods=["GET"])
def get_all_patients():
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        sql_query = """SELECT * FROM patients;"""
        cursor.execute(sql_query)

        query_result = cursor.fetchall()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[get_all_patients]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

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
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        sql_query = """SELECT * FROM patients WHERE PatientID = %s;"""
        cursor.execute(sql_query, (patient_id,))

        query_result = cursor.fetchone()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[get_one_patient]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    if query_result is None:
        return {"message": "Patient not found"}, 404

    patient = {
        "PatientID": query_result[0],
        "FirstName": query_result[1],
        "LastName": query_result[2],
        "DateofBirth": query_result[3],
    }
    return patient


@app.route("/patients", methods=["POST"])
def create_patient():
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    first_name = request.json["FirstName"]
    last_name = request.json["LastName"]
    date_of_birth = parse(request.json["DateofBirth"]).strftime("%Y-%m-%d %H:%M:%S")

    sql_query = """INSERT INTO patients (FirstName, LastName, DateofBirth) VALUES (%s, %s, %s);"""

    try:
        cursor.execute(sql_query, (first_name, last_name, date_of_birth))
        connection.commit()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[create_patient]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    return {"message": "Patient added"}, 201


@app.route("/patients/<int:PatientID>", methods=["PATCH"])
def edit_patient(PatientID):
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    first_name = request.json["FirstName"]
    last_name = request.json["LastName"]
    date_of_birth = request.json["DateofBirth"]

    sql_query = """UPDATE patients SET FirstName = %s, LastName = %s, DateofBirth = %s WHERE PatientID = %s;"""
    try:
        cursor.execute(sql_query, (first_name, last_name, date_of_birth, PatientID))

        connection.commit()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[edit_patient]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    return {"message": "Patient updated"}, 201


app.run(host="0.0.0.0", port=4000, debug=True)
