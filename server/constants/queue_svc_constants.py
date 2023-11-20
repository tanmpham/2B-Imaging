import mysql.connector
from constants.dbconfig import db_config

try:
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()
    sql_query = """SELECT * FROM producer;"""
    cursor.execute(sql_query)
    query_result = cursor.fetchall()
    cursor.close()
    connection.close()
    producerID = query_result[0][0]
except mysql.connector.Error as err:
    error = f"[get_producer_id]: {err}"
    print(error)

queue_json = "queue_svc/queue.json"

queue_received = "queue_svc/queue_received.json"
