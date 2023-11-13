import sqlite3


def add_tag(payload):
    print(payload)
    try:
        connection = sqlite3.connect("eyecameradb.sqlite")
        cursor = connection.cursor()
        sql_query = """INSERT INTO imagetags (TagID, Tag, UseCount) VALUES (?,?,?);"""
        cursor.execute(
            sql_query, (payload["TagID"], payload["Tag"], payload["UseCount"])
        )

        for item in payload["ImagesID"]:
            sql_query = """INSERT INTO imagetagslist (TagID, ImageID) VALUES (?,?);"""
            cursor.execute(sql_query, (payload["TagID"], int(item)))

        connection.commit()
        cursor.close()
        connection.close()
    except sqlite3.Error as err:
        error = f"[add_tag]: {err}"
        print(error)
