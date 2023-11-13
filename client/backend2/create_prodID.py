import sqlite3
import uuid

conn = sqlite3.connect("eyecameradb.sqlite")
c = conn.cursor()

producerID = str(uuid.uuid4())

c.execute(
    """
        DROP TABLE IF EXISTS `producer`;
    """
)

c.execute(
    """
          CREATE TABLE `producer` (
              `ProducerID` VARCHAR(36) PRIMARY KEY
          );
    """
)

query = """
        INSERT INTO producer (ProducerID) VALUES (?); 
    """

c.execute(query, (producerID,))
conn.commit()
conn.close()
