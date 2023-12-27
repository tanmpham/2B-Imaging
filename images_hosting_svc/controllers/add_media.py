from flask import Blueprint, request, make_response, jsonify, redirect
import mysql.connector
from constants.dbconfig import db_config

add_media_bp = Blueprint(
    "add_media",
    __name__,
)


@add_media_bp.route("/add-media", methods=["POST"])
def add_media():
    patient = request.json["Patient"]
    print(patient)

    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()
    except mysql.connector.Error as err:
        error = f"[add_media]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)
