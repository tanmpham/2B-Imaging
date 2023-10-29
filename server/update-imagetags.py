import os
import mysql.connector
from mysql.connector import Error

# image_folder_path = "server\patientimages"
relative_path = "2B-Imaging\server\patientimages"
image_folder_path = os.path.abspath(relative_path)
image_names = os.listdir(image_folder_path)
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "Password123",
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
