from flask import Blueprint, request, make_response, jsonify
import mysql.connector
from constants.dbconfig import db_config

imagenotes_bp = Blueprint("imagenotes", __name__)


# Add a new note
@imagenotes_bp.route("/imagenotes", methods=["POST"])
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
@imagenotes_bp.route("/imagenotes", methods=["GET"])
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
@imagenotes_bp.route("/imagenotes/<int:NoteID>", methods=["PATCH"])
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
@imagenotes_bp.route("/imagenotes/<int:NoteID>", methods=["DELETE"])
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
