import mysql.connector
from constants.dbconfig import db_config
import logging
import logging.config
import yaml

with open("log_conf.yml", "r") as f:
    log_config = yaml.safe_load(f.read())
    logging.config.dictConfig(log_config)

logger = logging.getLogger("basicLogger")


def add_tag(payload):
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()
        sql_query = """INSERT INTO imagetags (Tag, UseCount) VALUES (%s,%s);"""
        cursor.execute(sql_query, (payload["Tag"], payload["UseCount"]))

        # Get the ID of the last inserted row
        tag_id = cursor.lastrowid

        for item in payload["ImagesID"]:
            sql_query = """INSERT INTO imagetagslist (TagID, ImageID) VALUES (%s,%s);"""
            cursor.execute(sql_query, (tag_id, int(item)))

        connection.commit()
        cursor.close()
        connection.close()
        logger.info("[consumer]: New tag added to the database.")
    except mysql.connector.Error as err:
        error = f"[add_tag]: {err}"
        print(error)
