import os
import mysql.connector
import yaml
import random
from mysql.connector import Error

with open("app_conf.yml", "r") as f:
    appConfig = yaml.safe_load(f.read())

image_folder_path = "patientimages"
image_names = os.listdir(image_folder_path)
db_config = {
    "host": "localhost",
    "user": "root",
    "password": appConfig["sql-pass"],
    "database": "eyecameradb",
}

connection = mysql.connector.connect(**db_config)

try:
    if connection.is_connected():
        cursor = connection.cursor()

        # Reset AUTO_INCREMENT (Use with caution!)
        reset_auto_increment_query = "ALTER TABLE patientimages AUTO_INCREMENT = 1"
        cursor.execute(reset_auto_increment_query)

        # # Insert image names into the 'patientimages' table
        # for image_name in image_names:
        #     sql_query = "INSERT INTO patientimages (ImageName) VALUES (%s)"
        #     cursor.execute(sql_query, (image_name,))

        PatientID = [8, 3, 2, 7, 5, 10, 10, 6, 1, 9, 4]
        IsRightEye = [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
        Annotation = [
            "This is a test annotation",
            "This is a test annotation",
            "This is a test annotation",
            "This is a test annotation",
            "This is a test annotation",
            "This is a test annotation",
            "This is a test annotation",
            "This is a test annotation",
            "This is a test annotation",
            "This is a test annotation",
            "This is a test annotation",
        ]

        DateCreated = [
            "2023-04-20 13:34:57",
            "2023-04-20 14:34:57",
            "2023-04-20 15:34:57",
            "2023-04-20 16:34:57",
            "2023-07-20 21:34:57",
            "2023-07-20 13:34:57",
            "2023-07-20 13:34:57",
            "2023-10-20 13:34:57",
            "2023-10-20 13:34:57",
            "2023-10-20 13:34:57",
            "2023-10-20 13:34:57",
        ]

        for i in range(len(PatientID)):
            sql_query = f"""INSERT INTO patientimages (PatientID, IsRightEye, Annotation, ImageName, DateCreated) VALUES
                    ('{PatientID[i]}', '{IsRightEye[i]}', '{Annotation[i]}', '{image_names[i]}', '{DateCreated[i]}')"""
            cursor.execute(sql_query)

        for i in range(1, 11):
            # Insert notes
            image_id = random.randint(1, 11)
            note = f"Automatically generated note for image {image_id}"
            sql_insert_note_query = "INSERT INTO imagenotes (Note, NoteCreatedAt, ImageID) VALUES (%s, CURRENT_TIMESTAMP, %s)"
            # Loop through ImageIDs from 1 to 10 and insert tags
            tag_name = f"Automatically generated tag for image {image_id}"
            use_count = random.randint(1, 11)  # Initialize use count
            sql_insert_tag_query = (
                "INSERT INTO imagetags (Tag, UseCount, ImageID) VALUES (%s, %s, %s)"
            )
            cursor.execute(sql_insert_note_query, (note, image_id))
            cursor.execute(sql_insert_tag_query, (tag_name, use_count, image_id))

        # Commit changes and close the connection
        connection.commit()
        cursor.close()
        connection.close()
except Error as e:
    print("Error while connecting to MySQL", e)
