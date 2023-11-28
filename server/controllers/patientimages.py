from flask import Blueprint, request, make_response, jsonify
import mysql.connector
from constants.dbconfig import db_config
from datetime import datetime

patientimages_bp = Blueprint("patientimages", __name__)


@patientimages_bp.route("/patientimages", methods=["GET"])
def fetch_all_images():
    tag_id = request.args.get("tag-id")
    patient_id = request.args.get("patient-id")
    start_date = request.args.get('startDate')
    end_date = request.args.get('endDate')

    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        # Convert the start and end dates to datetime objects if they are provided
        if start_date and end_date:
            start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
            end_date = datetime.strptime(end_date, '%Y-%m-%d').date()

        if not tag_id and not patient_id and not start_date and not end_date:
            sql_query = "SELECT * FROM patientimages ORDER BY DateCreated DESC;"
            cursor.execute(sql_query)
        elif tag_id and not patient_id:
            # Get all images in a tag
            sql_query = """
                SELECT *
                FROM patientimages
                INNER JOIN imagetagslist ON patientimages.ImageID = imagetagslist.ImageID
                WHERE imagetagslist.TagID = %s;
            """
            cursor.execute(sql_query, (tag_id,))
        elif patient_id and not start_date and not end_date:
            # Get all images for a patient
            sql_query = """
                SELECT *
                FROM patientimages
                WHERE PatientID = %s;
            """
            cursor.execute(sql_query, (patient_id,))
        elif start_date and end_date and not tag_id and not patient_id:
            # Filter images by date range
            sql_query = """
                SELECT *
                FROM patientimages
                WHERE DateCreated BETWEEN %s AND %s;
            """
            cursor.execute(sql_query, (start_date, end_date))
        elif patient_id and start_date and end_date:
            # Filter images for a patient within the date range
            sql_query = """
                SELECT *
                FROM patientimages
                WHERE PatientID = %s AND DateCreated BETWEEN %s AND %s;
                """
            cursor.execute(sql_query, (patient_id, start_date, end_date))
        elif start_date and end_date:
            # Filter images by date range for all patients
            sql_query = """
                SELECT *
                FROM patientimages
                WHERE DateCreated BETWEEN %s AND %s;
            """
            cursor.execute(sql_query, (start_date, end_date))

        query_result = cursor.fetchall()

        # Commit changes and close the connection
        connection.commit()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[fetch_all_images]: {err}"
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
                "DateCreated": image[7].strftime("%Y-%m-%d %H:%M:%S") if image[7] else None,
            }
        )

    return make_response(jsonify(responseData), 200)


@patientimages_bp.route("/patientimages/<image_id>", methods=["GET", "PUT", "DELETE"])
def handle_image(image_id):
    if request.method == "GET":
        return fetch_single_image(image_id)

    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        if request.method == "PUT":
            # Replace the image in the backend
            new_image_data = request.json.get("ImageData")
            sql_query = "UPDATE patientimages SET ImageData = %s WHERE ImageID = %s;"
            cursor.execute(sql_query, (new_image_data, image_id))

        elif request.method == "DELETE":
            # Remove the image from the database
            sql_query = "DELETE FROM patientimages WHERE ImageID = %s;"
            cursor.execute(sql_query, (image_id,))

            # TODO: Add code to delete the image file from the backend file system if needed

        connection.commit()
    except mysql.connector.Error as err:
        error = f"[handle_image]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)
    finally:
        cursor.close()
        connection.close()

    if request.method == "PUT":
        return jsonify({"message": "Image updated successfully"}), 200
    elif request.method == "DELETE":
        return jsonify({"message": "Image deleted successfully"}), 200


@patientimages_bp.route("/patientimages/<image_id>", methods=["GET"])
def fetch_single_image(image_id):
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        sql_query = """SELECT * FROM patientimages WHERE ImageID = %s;"""
        cursor.execute(sql_query, (image_id,))

        query_result = cursor.fetchone()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        error = f"[fetch_single_image]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    if query_result is None:
        return {"message": "Image not found"}, 404

    parts = query_result[6].split(".")
    fileType = parts[len(parts) - 1]
    return {
        "ImageID": query_result[0],
        "PatientID": query_result[1],
        "ImageData": query_result[2],
        "IsRightEye": query_result[3],
        "Annotation": query_result[4],
        "ThumbnailData": query_result[5],
        "ImageName": query_result[6],
        "FileType": fileType,
        "DateCreated": query_result[7],
    }
