import os
import mysql.connector
import yaml

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
cursor = connection.cursor()

# # Reset AUTO_INCREMENT (Use with caution!)
# #reset_auto_increment_query = "ALTER TABLE patientimages AUTO_INCREMENT = 1"
# #cursor.execute(reset_auto_increment_query)


# # Insert image names into the 'patientimages' table
# for image_name in image_names:
#     sql_query = "INSERT INTO patientimages (ImageName) VALUES (%s)"
#     cursor.execute(sql_query, (image_name,))

PatientID = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
IsRightEye = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
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
    "2023-04-20 13:34:57",
    "2023-04-20 14:34:57",
    "2023-04-20 15:34:57",
    "2023-04-20 16:34:57",
    "2023-07-20 21:34:57",
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


# Commit changes and close the connection
connection.commit()
cursor.close()
connection.close()
