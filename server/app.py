from flask import Flask, abort, request
from flask_cors import CORS
from urllib.parse import urlparse
import yaml
import mysql.connector
import os 

relative_path = "2B-Imaging/server/app_conf.example.yml"
app_conf_path = os.path.abspath(relative_path)

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

    responseData = []

    for image in query_result:
        responseData.append(
            {
                "ImageID": image[0],
                "PatientID": image[1],
                "ImageData": image[2],
                "IsRightEye": image[3],
                "Annotation": image[4],
                "ThumbnailData": image[5],
                "ImageName": image[6],
                "DateCreated": image[7],
            }
        )

    return responseData

# add a new tag
@app.route("/imagetags", methods=["POST"])
def add_tag():
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()
    
    tag_name = request.json["Tag"]
    image_id = request.json["ImageID"]
    
    sql_query = """INSERT INTO imagetags (Tag, ImageID, UseCount) VALUES (%s, %s, %s);"""
    cursor.execute(sql_query, (tag_name, image_id, 1))
    
    connection.commit()
    cursor.close()
    connection.close()
    
    return {"message": "Tag added"}, 201


# Get all tags
@app.route("/imagetags", methods=["GET"])
def get_tags():
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    sql_query = """SELECT * FROM imagetags;"""
    cursor.execute(sql_query)

    query_result = cursor.fetchall()
    cursor.close()
    connection.close()

    tags = [{"TagID": tag[0], "ImageID": tag[1], "Tag": tag[2], "UseCount": tag[3]} for tag in query_result]
    return {"tags": tags}

# Update a tag
@app.route("/imagetags/<int:TagID>", methods=["PATCH"])
def update_tag(TagID):
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    new_tag_name = request.json["Tag"]
    sql_query = """UPDATE imagetags SET Tag = %s, UseCount = UseCount + 1 WHERE TagID = %s;"""
    
    cursor.execute(sql_query, (new_tag_name, TagID))
    connection.commit()
    cursor.close()
    connection.close()

    return {"message": "Tag updated"}

# Delete a tag
@app.route("/imagetags/<int:TagID>", methods=["DELETE"])
def delete_tag(TagID):
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    sql_query = """DELETE FROM imagetags WHERE TagID = %s;"""
    cursor.execute(sql_query, (TagID,))

    connection.commit()
    cursor.close()
    connection.close()

    return {"message": "Tag deleted"}

# Get tags for a specific image
@app.route("/tags", methods=["GET"])
def get_tags_for_image():
    image_id = request.args.get("ImageID")

    if not image_id:
        return {"message": "ImageID is required"}, 400

    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    sql_query = """SELECT * FROM imagetags WHERE ImageID = %s;"""
    cursor.execute(sql_query, (image_id,))

    query_result = cursor.fetchall()
    cursor.close()
    connection.close()

    tags = [{"TagID": tag[0], "ImageID": tag[1], "Tag": tag[2], "UseCount": tag[3]} for tag in query_result]
    return {"tags": tags}


# Add a new note
@app.route("/imagenotes", methods=["POST"])
def add_note():
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

    return {"message": "Note added"}, 201

# Get all notes
@app.route("/imagenotes", methods=["GET"])
def get_notes():
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    sql_query = """SELECT * FROM imagenotes;"""
    cursor.execute(sql_query)

    query_result = cursor.fetchall()
    cursor.close()
    connection.close()

    notes = [{"NoteID": note[0], "Note": note[1], "NoteCreatedAt": note[2], "ImageID": note[3]} for note in query_result]
    return {"notes": notes}


# Update a note
@app.route("/imagenotes/<int:NoteID>", methods=["PATCH"])
def update_note(NoteID):
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    new_content = request.json["Note"]

    sql_query = """UPDATE imagenotes SET Note = %s WHERE NoteID = %s;"""
    cursor.execute(sql_query, (new_content, NoteID))

    connection.commit()
    cursor.close()
    connection.close()

    return {"message": "Note updated"}

# Delete a note
@app.route("/imagenotes/<int:NoteID>", methods=["DELETE"])
def delete_note(NoteID):
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    sql_query = """DELETE FROM imagenotes WHERE NoteID = %s;"""
    cursor.execute(sql_query, (NoteID,))

    connection.commit()
    cursor.close()
    connection.close()

    return {"message": "Note deleted"}

# Get notes for a specific image
@app.route("/notes", methods=["GET"])
def get_notes_for_image():
    image_id = request.args.get("ImageID")

    if not image_id:
        return {"message": "ImageID is required"}, 400

    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    sql_query = """SELECT * FROM imagenotes WHERE ImageID = %s;"""
    cursor.execute(sql_query, (image_id,))

    query_result = cursor.fetchall()
    cursor.close()
    connection.close()

    notes = [{"NoteID": note[0], "Note": note[1], "NoteCreatedAt": note[2], "ImageID": note[3]} for note in query_result]
    return {"notes": notes}

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

    patients = [{"PatientID": patient[0], "FirstName": patient[1], "LastName": patient[2], "DateofBirth": query_result[3]} 
                for patient in query_result]
    return {"patients": patients}

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

    patient = {"PatientID": query_result[0], "FirstName": query_result[1], "LastName": query_result[2], "DateofBirth": query_result[3]}
    return {"patient": patient}


app.run(host="0.0.0.0", port=4000, debug=True)
