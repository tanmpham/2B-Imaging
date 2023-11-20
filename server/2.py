# import os
# import mysql.connector
# import yaml
# import random
# import datetime
# from mysql.connector import Error

# server_dir = os.path.dirname(os.path.abspath(__file__))
# config_file_path = os.path.join(server_dir, 'app_conf.yml')

# with open(config_file_path, "r") as f:
#     appConfig = yaml.safe_load(f.read())

# image_folder_path = os.path.join(server_dir, 'patientimages')
# image_names = os.listdir(image_folder_path)
# db_config = {
#     "host": "localhost",
#     "user": "root",
#     "password": appConfig["sql-pass"],
#     "database": "eyecameradb",
# }

# connection = mysql.connector.connect(**db_config)
# cursor = connection.cursor()

# # # Reset AUTO_INCREMENT (Use with caution!)
# # #reset_auto_increment_query = "ALTER TABLE patientimages AUTO_INCREMENT = 1"
# # #cursor.execute(reset_auto_increment_query)


# # # Insert image names into the 'patientimages' table
# # for image_name in image_names:
# #     sql_query = "INSERT INTO patientimages (ImageName) VALUES (%s)"
# #     cursor.execute(sql_query, (image_name,))

# PatientID = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
# IsRightEye = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
# Annotation = [
#     "This is a test annotation",
#     "This is a test annotation",
#     "This is a test annotation",
#     "This is a test annotation",
#     "This is a test annotation",
#     "This is a test annotation",
#     "This is a test annotation",
#     "This is a test annotation",
#     "This is a test annotation",
#     "This is a test annotation",
# ]

# DateCreated = [
#     "2021-07-20 13:34:57",
#     "2021-07-20 13:34:57",
#     "2021-07-20 13:34:57",
#     "2021-07-20 13:34:57",
#     "2021-07-20 13:34:57",
#     "2021-07-20 13:34:57",
#     "2021-07-20 13:34:57",
#     "2021-07-20 13:34:57",
#     "2021-07-20 13:34:57",
#     "2021-07-20 13:34:57",
# ]

# for i in range(len(PatientID)):
#     sql_query = f"""INSERT INTO patientimages (PatientID, IsRightEye, Annotation, ImageName, DateCreated) VALUES
#                 ('{PatientID[i]}', '{IsRightEye[i]}', '{Annotation[i]}', '{image_names[i]}', '{DateCreated[i]}')"""
#     cursor.execute(sql_query)


# # Commit changes and close the connection
# connection.commit()
# cursor.close()
# connection.close()

import os
import mysql.connector
import yaml

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
cursor = connection.cursor()

PatientID = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
IsRightEye = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
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
]

DateCreated = [
    "2021-07-20 13:34:57",
    "2021-07-20 13:34:57",
    "2021-07-20 13:34:57",
    "2021-07-20 13:34:57",
    "2021-07-20 13:34:57",
    "2021-07-20 13:34:57",
    "2021-07-20 13:34:57",
    "2021-07-20 13:34:57",
    "2021-07-20 13:34:57",
    "2021-07-20 13:34:57",
]

# Check that the lengths of all lists are the same
if len(PatientID) == len(IsRightEye) == len(Annotation) == len(DateCreated) == len(image_names):
    for patient_id, is_right_eye, annotation, date_created, image_name in zip(PatientID, IsRightEye, Annotation, DateCreated, image_names):
        sql_query = """INSERT INTO patientimages (PatientID, IsRightEye, Annotation, ImageName, DateCreated)
                       VALUES (%s, %s, %s, %s, %s)"""
        cursor.execute(sql_query, (patient_id, is_right_eye, annotation, image_name, date_created))

    # Commit changes and close the connection
    connection.commit()
    cursor.close()
    connection.close()
else:
    print("Lengths of input lists are not the same. Please check your data.")

print("Lengths:", len(PatientID), len(IsRightEye), len(Annotation), len(DateCreated), len(image_names))
