import os
import mysql.connector
import yaml
import random
import datetime
import uuid
from mysql.connector import Error

server_dir = os.path.dirname(os.path.abspath(__file__))
config_file_path = os.path.join(server_dir, 'app_conf.yml')

with open(config_file_path, "r") as f:
    appConfig = yaml.safe_load(f.read())

image_folder_path = os.path.join(server_dir, 'patientimages')
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

        start_date = datetime.date(2023, 10, 20)
        end_date = datetime.date(2023, 10, 30)

        # Populate Patient Images
        for i in range(len(image_names)):
            PatientID = random.randint(1, 10)
            IsRightEye = random.randint(0, 1)
            Annotation = f"Image Annotation for Patient #{PatientID}"

            date = start_date + datetime.timedelta(
                days=random.randint(0, (end_date - start_date).days)
            )

            # Generate a random time between 00:00:00 and 23:59:59
            time = datetime.time(
                random.randint(0, 23), random.randint(0, 59), random.randint(0, 59)
            )
            # Combine the date and time into a datetime object
            DateCreated = datetime.datetime.combine(date, time)

            sql_query = f"""INSERT INTO patientimages (PatientID, IsRightEye, Annotation, ImageName, DateCreated) VALUES
                    ('{PatientID}', '{IsRightEye}', '{Annotation}', '{image_names[i]}', '{DateCreated}')"""
            cursor.execute(sql_query)

        # Populate Tags
        for i in range(1, 4):
            tag_name = f"tag_{i}"
            use_count = random.randint(30, 40)

            sql_insert_tag_query = (
                "INSERT INTO imagetags (Tag, UseCount) VALUES (%s, %s)"
            )

            cursor.execute(sql_insert_tag_query, (tag_name, use_count))

            image_id_used = []

            for j in range(1, use_count + 1):
                image_id = random.randint(1, len(image_names))
                while image_id in image_id_used:
                    image_id = random.randint(1, len(image_names))
                image_id_used.append(image_id)
                sql_query = "INSERT INTO imagetagslist (ImageID, TagID) VALUES (%s, %s)"
                cursor.execute(sql_query, (image_id, i))

        # Populate notes
        for i in range(1, 240):
            image_id = random.randint(1, len(image_names))
            note = f"Automatically generated note #{i} for image {image_id}"
            date = start_date + datetime.timedelta(
                days=random.randint(0, (end_date - start_date).days)
            )

            # Generate a random time between 00:00:00 and 23:59:59
            time = datetime.time(
                random.randint(0, 23), random.randint(0, 59), random.randint(0, 59)
            )
            # Combine the date and time into a datetime object
            DateCreated = datetime.datetime.combine(date, time)

            sql_insert_note_query = "INSERT INTO imagenotes (Note, NoteCreatedAt, ImageID) VALUES (%s, %s, %s)"
            cursor.execute(sql_insert_note_query, (note, DateCreated, image_id))

        # Create producer
        producerID = str(uuid.uuid4())

        cursor.execute(
            """
                DROP TABLE IF EXISTS `producer`;
            """
        )

        cursor.execute(
            """
                  CREATE TABLE `producer` (
                      `ProducerID` VARCHAR(36) PRIMARY KEY
                  );
            """
        )

        query = """
                INSERT INTO producer (ProducerID) VALUES (%s); 
            """

        cursor.execute(query, (producerID,))

        # Commit changes and close the connection
        connection.commit()
        cursor.close()
        connection.close()
except Error as e:
    print("Error while connecting to MySQL", e)
