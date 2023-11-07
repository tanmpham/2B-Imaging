import sqlite3

conn = sqlite3.connect("eyecameradb.sqlite")
c = conn.cursor()

c.execute(
    """
        DROP TABLE IF EXISTS `imagetags`;
    """
)

c.execute(
    """
          CREATE TABLE `imagetags` (
          `TagID` INTEGER PRIMARY KEY AUTOINCREMENT,
          `ImageID` INTEGER DEFAULT NULL,
          `Tag` VARCHAR(50) DEFAULT NULL
          );
    """
)

c.execute(
    """ --
        -- Table structure for table `patientimages`
        --

        DROP TABLE IF EXISTS `patientimages`;
    """
)

c.execute(
    """
        CREATE TABLE `patientimages` (
          `ImageID` INTEGER PRIMARY KEY AUTOINCREMENT,
          `PatientID` INTEGER DEFAULT NULL,
          `ImageData` longblob,
          `IsRightEye` tinyINTEGER DEFAULT NULL,
          `Annotation` text,
          `ThumbnailData` blob,
          FOREIGN KEY(PatientID) REFERENCES patients(PatientID)
        );
    """
)

c.execute(
    """
        --
        -- Table structure for table `patients`
        --

        DROP TABLE IF EXISTS `patients`;
    """
)

c.execute(
    """
        CREATE TABLE `patients` (
          `PatientID` INTEGER PRIMARY KEY AUTOINCREMENT,
          `FirstName` varchar(50) DEFAULT NULL,
          `LastName` varchar(50) DEFAULT NULL
        );
    """
)

c.execute(
    """
        --
        -- Table structure for table `workqueue`
        --

        DROP TABLE IF EXISTS `workqueue`;
    """
)

c.execute(
    """
        CREATE TABLE `workqueue` (
          `workId` INTEGER PRIMARY KEY AUTOINCREMENT,
          `PatientId` int NOT NULL,
          `InsertDateTime` datetime NOT NULL,
          `Seen` tinyINTEGER DEFAULT NULL
        );
    """
)

c.execute(
    """
        -- Add a DateofBirth column to the patients table 
        ALTER TABLE patients
        ADD DateofBirth DATE;
    """
)

c.execute(
    """
        -- Add ImageName and DateCreated columns to the patientimages table 
        ALTER TABLE patientimages
        ADD ImageName VARCHAR(50);
    """
)
c.execute(
    """
        -- Add ImageName and DateCreated columns to the patientimages table 
        ALTER TABLE patientimages
        ADD DateCreated DATETIME; -- OR TIMESTAMP 
    """
)

c.execute(
    """
        -- Add UseCount column to the imagetags table 
        ALTER TABLE imagetags
        ADD UseCount INT;
    """
)

c.execute(
    """
        -- Add a new table imagenotes with columns NoteId, Note, NoteCreatedAt, and ImageID columns 
        DROP TABLE IF EXISTS `imagenotes`;
    """
)

c.execute(
    """
        CREATE TABLE `imagenotes` (
            `NoteID` INTEGER PRIMARY KEY AUTOINCREMENT,
            `Note` TEXT,
            `NoteCreatedAt` DATE, 
            `ImageID` INTEGER DEFAULT NULL, 
            FOREIGN KEY (`ImageID`) REFERENCES `patientimages`(`ImageID`)
        );
    """
)

c.execute(
    """
        -- Populate with 10 patients and patientimages tables with data
        INSERT INTO patients (FirstName, LastName, DateofBirth) VALUES ('John', 'Smith', '1980-01-01'); 
    """
)
c.execute(
    """
        INSERT INTO patients (FirstName, LastName, DateofBirth) VALUES ('Jane', 'Doe', '1985-01-01');
    """
)
c.execute(
    """
    INSERT INTO patients (FirstName, LastName, DateofBirth) VALUES ('Bob', 'Jones', '1990-01-01');
    """
)
c.execute(
    """
    INSERT INTO patients (FirstName, LastName, DateofBirth) VALUES ('Sally', 'Smith', '1995-01-01');
    """
)
c.execute(
    """
    INSERT INTO patients (FirstName, LastName, DateofBirth) VALUES ('Joe', 'Doe', '2000-01-01');
    """
)
c.execute(
    """
    INSERT INTO patients (FirstName, LastName, DateofBirth) VALUES ('John', 'Jones', '2005-01-01');
    """
)
c.execute(
    """
    INSERT INTO patients (FirstName, LastName, DateofBirth) VALUES ('Jane', 'Smith', '2010-01-01');
    """
)
c.execute(
    """
    INSERT INTO patients (FirstName, LastName, DateofBirth) VALUES ('Bob', 'Doe', '2015-01-01');
    """
)
c.execute(
    """
    INSERT INTO patients (FirstName, LastName, DateofBirth) VALUES ('Sally', 'Jones', '2020-01-01');
    """
)
c.execute(
    """
     INSERT INTO patients (FirstName, LastName, DateofBirth) VALUES ('Joe', 'Smith', '2025-01-01');
    """
)


conn.commit()
conn.close()
