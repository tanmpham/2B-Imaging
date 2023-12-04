from flask import Flask, abort, request
from flask_cors import CORS
from urllib.parse import urlparse
import yaml
import os
from controllers.patientimages import patientimages_bp
from controllers.imagetags import imagetags_bp
from controllers.imagenotes import imagenotes_bp
from controllers.patients import patients_bp
from queue_svc import queue_bp


server_dir = os.path.dirname(os.path.abspath(__file__))
config_file_path = os.path.join(server_dir, "app_conf.yml")

with open(config_file_path, "r") as f:
    appConfig = yaml.safe_load(f.read())


class SecuredStaticFlask(Flask):
    def send_static_file(self, filename):
        # Check if the referrer is '<frontend_url>'
        referrer = request.headers.get("Referer")

        if referrer:
            url = urlparse(referrer)
            # if (
            #     url.netloc == appConfig["client-frontend-url"]
            #     or url.netloc == appConfig["client-backend-url"]
            # ):
            return super(SecuredStaticFlask, self).send_static_file(filename)
        abort(403)  # Forbidden access


app = SecuredStaticFlask(
    __name__, static_folder="patientimages", static_url_path="/gallery"
)

app.register_blueprint(patients_bp)
app.register_blueprint(patientimages_bp)
app.register_blueprint(imagetags_bp)
app.register_blueprint(imagenotes_bp)
# app.register_blueprint(queue_bp)

CORS(
    app,
    origins=[
        appConfig["client-frontend-url"],
        appConfig["client-backend-url"],
    ],
)


@app.route("/")
def home():
    return "Restricted server!", 400


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


app.run(host="0.0.0.0", port=4000, debug=True)
