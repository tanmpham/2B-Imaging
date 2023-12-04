DROP TABLE IF EXISTS `imageversions`

CREATE TABLE `imageversions` (
  `NewImageID` int NOT NULL AUTO_INCREMENT,
  `ImageID` int DEFAULT NULL,
  `NewImageName` varchar(50) DEFAULT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`NewImageID`),
  KEY `ImageID` (`ImageID`),
  CONSTRAINT `imageversions_ibfk_1` FOREIGN KEY (`ImageID`) REFERENCES `patientimages` (`ImageID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;