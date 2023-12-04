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

          # Loop through ImageIDs from 1 to 10 and insert tags
          for image_id in range(1, 11):  # 1 to 10 inclusive
            tag_name = f'Automatically generated tag for image {image_id}'
            use_count = 1  # Initialize use count
            sql_insert_tag_query = "INSERT INTO imagetags (Tag, UseCount, ImageID) VALUES (%s, %s, %s)"
            cursor.execute(sql_insert_tag_query, (tag_name, use_count, image_id))

          # Commit the transaction
          connection.commit()

except Error as e:
    print("Error while connecting to MySQL", e)






# Commit changes and close the connection
connection.commit()
cursor.close()
connection.close()