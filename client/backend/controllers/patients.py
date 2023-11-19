from flask import Blueprint, request, make_response, jsonify
import sqlite3
from dateutil.parser import parse

patients_bp = Blueprint("patients", __name__)


# set up api for patient
# Fetch all patients
@patients_bp.route("/patients", methods=["GET"])
def get_all_patients():
    try:
        connection = sqlite3.connect("eyecameradb.sqlite")
        cursor = connection.cursor()

        sql_query = """SELECT * FROM patients;"""
        cursor.execute(sql_query)

        query_result = cursor.fetchall()
        cursor.close()
        connection.close()
    except sqlite3.Error as err:
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
@patients_bp.route("/patients/<int:patient_id>", methods=["GET"])
def get_one_patient(patient_id):
    try:
        connection = sqlite3.connect("eyecameradb.sqlite")
        cursor = connection.cursor()

        sql_query = """SELECT * FROM patients WHERE PatientID = ?;"""
        cursor.execute(sql_query, (patient_id,))

        query_result = cursor.fetchone()
        cursor.close()
        connection.close()
    except sqlite3.Error as err:
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


@patients_bp.route("/patients", methods=["POST"])
def create_patient():
    first_name = request.json["FirstName"]
    last_name = request.json["LastName"]
    try:
        connection = sqlite3.connect("eyecameradb.sqlite")
        cursor = connection.cursor()

        date_of_birth = parse(request.json["DateofBirth"]).strftime("%Y-%m-%d %H:%M:?")

        sql_query = """INSERT INTO patients (FirstName, LastName, DateofBirth) VALUES (?, ?, ?);"""

        cursor.execute(sql_query, (first_name, last_name, date_of_birth))
        connection.commit()
        cursor.close()
        connection.close()
    except sqlite3.Error as err:
        error = f"[create_patient]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    return {"message": "Patient added"}, 201


@patients_bp.route("/patients/<int:PatientID>", methods=["PATCH"])
def edit_patient(PatientID):
    try:
        connection = sqlite3.connect("eyecameradb.sqlite")
        cursor = connection.cursor()

        first_name = request.json["FirstName"]
        last_name = request.json["LastName"]
        date_of_birth = request.json["DateofBirth"]

        sql_query = """UPDATE patients SET FirstName = ?, LastName = ?, DateofBirth = ? WHERE PatientID = ?;"""

        cursor.execute(sql_query, (first_name, last_name, date_of_birth, PatientID))

        connection.commit()
        cursor.close()
        connection.close()
    except sqlite3.Error as err:
        error = f"[edit_patient]: {err}"
        print(error)
        return make_response(jsonify({"message": error}), 500)

    return {"message": "Patient updated"}, 201
