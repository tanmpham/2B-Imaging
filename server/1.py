import os
import mysql.connector
import yaml
import random
import datetime
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
cursor = connection.cursor()

try:
  if connection.is_connected():
          cursor = connection.cursor()

          # Loop through ImageIDs from 1 to 10 and insert notes
          for image_id in range(1, 11):  # 1 to 10 inclusive
              note = f'Automatically generated note for image {image_id}'
              sql_insert_note_query = "INSERT INTO imagenotes (Note, NoteCreatedAt, ImageID) VALUES (%s, CURRENT_TIMESTAMP, %s)"
              cursor.execute(sql_insert_note_query, (note, image_id))

          # Commit the transaction
          connection.commit()

except Error as e:
    print("Error while connecting to MySQL", e)






# Commit changes and close the connection
connection.commit()
cursor.close()
connection.close()