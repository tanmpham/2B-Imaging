from flask import Blueprint, request, make_response, jsonify
import mysql.connector
from constants.dbconfig import db_config

imagetags_bp = Blueprint("imagetags", __name__)


# add a new tag
@imagetags_bp.route("/imagetags", methods=["POST"])
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
@imagetags_bp.route("/tags", methods=["GET"])
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
@imagetags_bp.route("/imagetags/<int:TagID>", methods=["PATCH"])
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
@imagetags_bp.route("/imagetags/<int:TagID>", methods=["DELETE"])
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
