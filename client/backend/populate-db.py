import os
import sqlite3
import random
import datetime


image_folder_path = "patientimages"
image_names = os.listdir(image_folder_path)


connection = sqlite3.connect("eyecameradb.sqlite")


cursor = connection.cursor()

# Reset AUTO_INCREMENT (Use with caution!)
# reset_auto_increment_query = "ALTER TABLE patientimages AUTO_INCREMENT = 1"
# cursor.execute(reset_auto_increment_query)

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

    sql_insert_tag_query = "INSERT INTO imagetags (Tag, UseCount) VALUES (?, ?)"

    cursor.execute(sql_insert_tag_query, (tag_name, use_count))

    image_id_used = []

    for j in range(1, use_count + 1):
        image_id = random.randint(1, len(image_names))
        while image_id in image_id_used:
            image_id = random.randint(1, len(image_names))
        image_id_used.append(image_id)
        sql_query = "INSERT INTO imagetagslist (ImageID, TagID) VALUES (?, ?)"
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

    sql_insert_note_query = (
        "INSERT INTO imagenotes (Note, NoteCreatedAt, ImageID) VALUES (?, ?, ?)"
    )
    cursor.execute(
        sql_insert_note_query,
        (note, DateCreated.strftime("%Y-%m-%d %H:%M:%S"), image_id),
    )

# Commit changes and close the connection
connection.commit()
cursor.close()
connection.close()
