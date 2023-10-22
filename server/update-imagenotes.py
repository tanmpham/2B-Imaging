import os
import mysql.connector
from mysql.connector import Error

image_folder_path = "server\patientimages"
image_names = os.listdir(image_folder_path)
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "your_password",
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
