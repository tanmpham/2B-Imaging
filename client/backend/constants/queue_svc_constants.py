import sqlite3

try:
    connection = sqlite3.connect("eyecameradb.sqlite")
    cursor = connection.cursor()
    sql_query = """SELECT * FROM producer;"""
    cursor.execute(sql_query)
    query_result = cursor.fetchall()
    cursor.close()
    connection.close()
    producerID = query_result[0][0]
except sqlite3.Error as err:
    error = f"[get_producer_id]: {err}"
    print(error)

queue_json = "queue_svc/queue.json"

queue_received = "queue_svc/queue_received.json"
