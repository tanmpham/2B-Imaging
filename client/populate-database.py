import sqlite3
import os
import random

image_folder_path = "patientimages"
image_names = os.listdir(image_folder_path)

conn = sqlite3.connect("eyecameradb.sqlite")
c = conn.cursor()

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
    c.execute(sql_query)

# Loop through ImageIDs from 1 to 10 and insert notes
for image_id in range(1, 11):  # 1 to 10 inclusive
    note = f"Automatically generated note for image {image_id}"
    sql_insert_note_query = "INSERT INTO imagenotes (Note, NoteCreatedAt, ImageID) VALUES (?, CURRENT_TIMESTAMP, ?)"
    c.execute(sql_insert_note_query, (note, image_id))

# Loop through ImageIDs from 1 to 10 and insert tags
for image_id in range(1, 11):  # 1 to 10 inclusive
    tag_name = f"Automatically generated tag for image {image_id}"
    use_count = random.randint(1, 10)
    sql_insert_tag_query = (
        "INSERT INTO imagetags (Tag, UseCount, ImageID) VALUES (?, ?, ?)"
    )
    c.execute(sql_insert_tag_query, (tag_name, use_count, image_id))


# Commit changes and close the connection
conn.commit()
c.close()
conn.close()
