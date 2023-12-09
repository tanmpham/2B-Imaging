from constants.dbconfig import db_config
from flask import Blueprint, request
import mysql.connector

imageversions_bp = Blueprint("imageversions", __name__)


@app.route("/imageversions/<int:ImageID>", methods=["POST"])
def save_edited_image():
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    image_id = request.json["ImageID"]
    new_image_name = request.json["NewImageName"]

    sql_query = """INSERT INTO imageversions (ImageID, NewImageName) VALUES (%s, %s);"""
    cursor.execute(sql_query, (image_id, new_image_name))

    connection.commit()
    cursor.close()
    connection.close()

    return {"message": "New image added"}, 201


@app.route("/imageversions", methods=["GET"])
def get_edited_images(ImageID):
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()

    image_id = request.args.get(ImageID)

    sql_query = """SELECT * FROM imageversions WHERE ImageID = %s;"""
    cursor.execute(sql_query, (image_id,))

    query_result = cursor.fetchall()
    cursor.close()
    connection.close()

    if query_result is None:
        return {"message": "No edited images found"}, 404

    edited_images = [
        {
            "NewImageID": edit_image[0],
            "ImageID": edit_image[1],
            "NewImageName": edit_image[2],
            "CreatedAt": edit_image[3],
        }
        for edit_image in query_result
    ]
    return {"edited_images": edited_images}
