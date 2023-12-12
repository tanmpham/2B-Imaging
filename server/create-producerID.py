import mysql.connector
from constants.dbconfig import db_config
import uuid

conn = mysql.connector.connect(**db_config)
c = conn.cursor()

producerID = str(uuid.uuid4())

query = """
        INSERT INTO producer (ProducerID) VALUES (%s); 
    """

c.execute(query, (producerID,))
conn.commit()
conn.close()
