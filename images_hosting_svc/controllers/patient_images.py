from flask import Blueprint

patient_images_bp = Blueprint(
    "patient_images",
    __name__,
    static_folder="../patientimages",
    static_url_path="/gallery",
)
