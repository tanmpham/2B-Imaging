from flask import Blueprint, request, make_response, jsonify
import mysql.connector
from constants.dbconfig import db_config

patientimages_bp = Blueprint("patientimages", __name__)


@patientimages_bp.route("/patientimages", methods=["GET"])
def fetchAllImages():
    tag_id = request.args.get("tag-id")
    patient_id = request.args.get("patient-id")
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        if not tag_id and not patient_id:
            sql_query = f"""SELECT * FROM patientimages ORDER BY DateCreated DESC;"""
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
        elif not tag_id and patient_id:  # if only patient-id is given
            # Get all images for a patient
            sql_query = """
          SELECT *
          FROM patientimages
          INNER JOIN patients ON patientimages.PatientID = patients.PatientID
          WHERE patients.PatientID = %s;
          """
            cursor.execute(sql_query, (patient_id,))
        else:  # if both parameters are given
            # Get all images for a patient in a tag
            sql_query = """
          SELECT *
          FROM patientimages
          INNER JOIN imagetagslist ON patientimages.ImageID = imagetagslist.ImageID
          INNER JOIN patients ON patientimages.PatientID = patients.PatientID
          WHERE imagetagslist.TagID = %s AND patients.PatientID = %s;
          """
            cursor.execute(sql_query, (tag_id, patient_id))

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
