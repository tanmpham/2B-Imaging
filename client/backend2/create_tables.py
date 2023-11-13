import sqlite3

conn = sqlite3.connect("eyecameradb.sqlite")
c = conn.cursor()

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
          `LastName` varchar(50) DEFAULT NULL,
          `DateofBirth` date DEFAULT NULL
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
          `PatientID` int DEFAULT NULL,
          `ImageData` longblob,
          `IsRightEye` tinyint DEFAULT NULL,
          `Annotation` text,
          `ThumbnailData` blob,
          `ImageName` varchar(50) DEFAULT NULL,
          `DateCreated` datetime DEFAULT NULL,
          FOREIGN KEY(PatientID) REFERENCES patients(PatientID)
        );
    """
)

c.execute(
    """
        DROP TABLE IF EXISTS `imagetags`;
    """
)

c.execute(
    """
          CREATE TABLE `imagetags` (
          `TagID` INTEGER PRIMARY KEY AUTOINCREMENT,
          `Tag` VARCHAR(50) DEFAULT NULL,
          `UseCount` INTEGER DEFAULT NULL
          );
    """
)

c.execute(
    """
        -- Add a new table imagetagslist
        DROP TABLE IF EXISTS `imagetagslist`;
    """
)

c.execute(
    """
        CREATE TABLE `imagetagslist` (
            `ImageTagsListID` INTEGER PRIMARY KEY AUTOINCREMENT,
            `ImageID` INTEGER NOT NULL,
            `TagID` INTEGER NOT NULL,
            FOREIGN KEY (`ImageID`) REFERENCES `patientimages` (`ImageID`)
            FOREIGN KEY (`TagID`) REFERENCES `imagetags` (`TagID`)
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
          `PatientId` INTEGER NOT NULL,
          `InsertDateTime` datetime NOT NULL,
          `Seen` tinyINTEGER DEFAULT NULL
        );
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
            `NoteCreatedAt` datetime DEFAULT NULL, 
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
