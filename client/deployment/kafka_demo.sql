CREATE DATABASE  IF NOT EXISTS `eyecameradb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `eyecameradb`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: eyecameradb
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `imagenotes`
--

DROP TABLE IF EXISTS `imagenotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenotes` (
  `NoteID` int NOT NULL AUTO_INCREMENT,
  `Note` text,
  `NoteCreatedAt` datetime DEFAULT NULL,
  `ImageID` int DEFAULT NULL,
  PRIMARY KEY (`NoteID`),
  KEY `ImageID` (`ImageID`),
  CONSTRAINT `imagenotes_ibfk_1` FOREIGN KEY (`ImageID`) REFERENCES `patientimages` (`ImageID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenotes`
--

LOCK TABLES `imagenotes` WRITE;
/*!40000 ALTER TABLE `imagenotes` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenotes` ENABLE KEYS */;
INSERT INTO `imagenotes` VALUES (1,'Automatically generated note #1 for image 43','2023-10-24 12:11:50',43),(2,'Automatically generated note #2 for image 32','2023-10-24 12:11:50',32),(3,'Automatically generated note #3 for image 25','2023-10-24 12:11:50',25),(4,'Automatically generated note #4 for image 43','2023-10-24 12:11:50',43),(5,'Automatically generated note #5 for image 41','2023-10-24 12:11:50',41),(6,'Automatically generated note #6 for image 1','2023-10-24 12:11:50',1),(7,'Automatically generated note #7 for image 41','2023-10-24 12:11:50',41),(8,'Automatically generated note #8 for image 1','2023-10-24 12:11:50',1),(9,'Automatically generated note #9 for image 24','2023-10-24 12:11:50',24),(10,'Automatically generated note #10 for image 45','2023-10-24 12:11:50',45),(11,'Automatically generated note #11 for image 24','2023-10-24 12:11:50',24),(12,'Automatically generated note #12 for image 7','2023-10-24 12:11:50',7),(13,'Automatically generated note #13 for image 20','2023-10-24 12:11:50',20),(14,'Automatically generated note #14 for image 11','2023-10-24 12:11:50',11),(15,'Automatically generated note #15 for image 38','2023-10-24 12:11:50',38),(16,'Automatically generated note #16 for image 37','2023-10-24 12:11:50',37),(17,'Automatically generated note #17 for image 3','2023-10-24 12:11:50',3),(18,'Automatically generated note #18 for image 26','2023-10-24 12:11:50',26),(19,'Automatically generated note #19 for image 31','2023-10-24 12:11:50',31),(20,'Automatically generated note #20 for image 3','2023-10-24 12:11:50',3),(21,'Automatically generated note #21 for image 29','2023-10-24 12:11:50',29),(22,'Automatically generated note #22 for image 29','2023-10-24 12:11:50',29),(23,'Automatically generated note #23 for image 4','2023-10-24 12:11:50',4),(24,'Automatically generated note #24 for image 34','2023-10-24 12:11:50',34),(25,'Automatically generated note #25 for image 40','2023-10-24 12:11:50',40),(26,'Automatically generated note #26 for image 10','2023-10-24 12:11:50',10),(27,'Automatically generated note #27 for image 44','2023-10-24 12:11:50',44),(28,'Automatically generated note #28 for image 41','2023-10-24 12:11:50',41),(29,'Automatically generated note #29 for image 21','2023-10-24 12:11:50',21),(30,'Automatically generated note #30 for image 43','2023-10-24 12:11:50',43),(31,'Automatically generated note #31 for image 16','2023-10-24 12:11:50',16),(32,'Automatically generated note #32 for image 12','2023-10-24 12:11:50',12),(33,'Automatically generated note #33 for image 21','2023-10-24 12:11:50',21),(34,'Automatically generated note #34 for image 39','2023-10-24 12:11:50',39),(35,'Automatically generated note #35 for image 21','2023-10-24 12:11:50',21),(36,'Automatically generated note #36 for image 31','2023-10-24 12:11:50',31),(37,'Automatically generated note #37 for image 5','2023-10-24 12:11:50',5),(38,'Automatically generated note #38 for image 1','2023-10-24 12:11:50',1),(39,'Automatically generated note #39 for image 31','2023-10-24 12:11:50',31),(40,'Automatically generated note #40 for image 33','2023-10-24 12:11:50',33),(41,'Automatically generated note #41 for image 34','2023-10-24 12:11:50',34),(42,'Automatically generated note #42 for image 33','2023-10-24 12:11:50',33),(43,'Automatically generated note #43 for image 5','2023-10-24 12:11:50',5),(44,'Automatically generated note #44 for image 22','2023-10-24 12:11:50',22),(45,'Automatically generated note #45 for image 15','2023-10-24 12:11:50',15),(46,'Automatically generated note #46 for image 39','2023-10-24 12:11:50',39),(47,'Automatically generated note #47 for image 8','2023-10-24 12:11:50',8),(48,'Automatically generated note #48 for image 15','2023-10-24 12:11:50',15),(49,'Automatically generated note #49 for image 23','2023-10-24 12:11:50',23),(50,'Automatically generated note #50 for image 42','2023-10-24 12:11:50',42),(51,'Automatically generated note #51 for image 24','2023-10-24 12:11:50',24),(52,'Automatically generated note #52 for image 34','2023-10-24 12:11:50',34),(53,'Automatically generated note #53 for image 27','2023-10-24 12:11:50',27),(54,'Automatically generated note #54 for image 29','2023-10-24 12:11:50',29),(55,'Automatically generated note #55 for image 3','2023-10-24 12:11:50',3),(56,'Automatically generated note #56 for image 27','2023-10-24 12:11:50',27),(57,'Automatically generated note #57 for image 17','2023-10-24 12:11:50',17),(58,'Automatically generated note #58 for image 31','2023-10-24 12:11:50',31),(59,'Automatically generated note #59 for image 8','2023-10-24 12:11:50',8),(60,'Automatically generated note #60 for image 21','2023-10-24 12:11:50',21),(61,'Automatically generated note #61 for image 16','2023-10-24 12:11:50',16),(62,'Automatically generated note #62 for image 27','2023-10-24 12:11:50',27),(63,'Automatically generated note #63 for image 41','2023-10-24 12:11:50',41),(64,'Automatically generated note #64 for image 15','2023-10-24 12:11:50',15),(65,'Automatically generated note #65 for image 36','2023-10-24 12:11:50',36),(66,'Automatically generated note #66 for image 43','2023-10-24 12:11:50',43),(67,'Automatically generated note #67 for image 27','2023-10-24 12:11:50',27),(68,'Automatically generated note #68 for image 20','2023-10-24 12:11:50',20),(69,'Automatically generated note #69 for image 42','2023-10-24 12:11:50',42),(70,'Automatically generated note #70 for image 2','2023-10-24 12:11:50',2),(71,'Automatically generated note #71 for image 17','2023-10-24 12:11:50',17),(72,'Automatically generated note #72 for image 23','2023-10-24 12:11:50',23),(73,'Automatically generated note #73 for image 11','2023-10-24 12:11:50',11),(74,'Automatically generated note #74 for image 17','2023-10-24 12:11:50',17),(75,'Automatically generated note #75 for image 24','2023-10-24 12:11:50',24),(76,'Automatically generated note #76 for image 24','2023-10-24 12:11:50',24),(77,'Automatically generated note #77 for image 39','2023-10-24 12:11:50',39),(78,'Automatically generated note #78 for image 23','2023-10-24 12:11:50',23),(79,'Automatically generated note #79 for image 10','2023-10-24 12:11:50',10),(80,'Automatically generated note #80 for image 27','2023-10-24 12:11:50',27),(81,'Automatically generated note #81 for image 24','2023-10-24 12:11:50',24),(82,'Automatically generated note #82 for image 26','2023-10-24 12:11:50',26),(83,'Automatically generated note #83 for image 26','2023-10-24 12:11:50',26),(84,'Automatically generated note #84 for image 3','2023-10-24 12:11:50',3),(85,'Automatically generated note #85 for image 20','2023-10-24 12:11:50',20),(86,'Automatically generated note #86 for image 15','2023-10-24 12:11:50',15),(87,'Automatically generated note #87 for image 14','2023-10-24 12:11:50',14),(88,'Automatically generated note #88 for image 30','2023-10-24 12:11:50',30),(89,'Automatically generated note #89 for image 15','2023-10-24 12:11:50',15),(90,'Automatically generated note #90 for image 7','2023-10-24 12:11:50',7),(91,'Automatically generated note #91 for image 22','2023-10-24 12:11:50',22),(92,'Automatically generated note #92 for image 3','2023-10-24 12:11:50',3),(93,'Automatically generated note #93 for image 29','2023-10-24 12:11:50',29),(94,'Automatically generated note #94 for image 21','2023-10-24 12:11:50',21),(95,'Automatically generated note #95 for image 33','2023-10-24 12:11:50',33),(96,'Automatically generated note #96 for image 8','2023-10-24 12:11:50',8),(97,'Automatically generated note #97 for image 16','2023-10-24 12:11:50',16),(98,'Automatically generated note #98 for image 34','2023-10-24 12:11:50',34),(99,'Automatically generated note #99 for image 42','2023-10-24 12:11:50',42),(100,'Automatically generated note #100 for image 17','2023-10-24 12:11:50',17);
UNLOCK TABLES;

--
-- Table structure for table `imagetags`
--

DROP TABLE IF EXISTS `imagetags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagetags` (
  `TagID` int NOT NULL AUTO_INCREMENT,
  `ImageID` int DEFAULT NULL,
  `Tag` varchar(50) DEFAULT NULL,
  `UseCount` int DEFAULT NULL,
  PRIMARY KEY (`TagID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagetags`
--

LOCK TABLES `imagetags` WRITE;
/*!40000 ALTER TABLE `imagetags` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagetags` ENABLE KEYS */;
INSERT INTO `imagetags`(TagID,ImageID,Tag,UseCount) VALUES (1,1,'tag_1',33),(2,1,'tag_2',32),(3,1,'tag_3',34),(4,1,'test1',1),(5,1,'test2',3),(6,1,'test3',2),(7,1,'test4',1);
UNLOCK TABLES;

--
-- Table structure for table `imagetagslist`
--

DROP TABLE IF EXISTS `imagetagslist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagetagslist` (
  `ImageTagsListID` int NOT NULL AUTO_INCREMENT,
  `ImageID` int NOT NULL,
  `TagID` int NOT NULL,
  PRIMARY KEY (`ImageTagsListID`),
  KEY `fk__idx` (`ImageID`),
  KEY `fk_imagetagslist_1_idx` (`TagID`),
  CONSTRAINT `fk_imageidtagslist` FOREIGN KEY (`ImageID`) REFERENCES `patientimages` (`ImageID`),
  CONSTRAINT `fk_imagetagslist_1` FOREIGN KEY (`TagID`) REFERENCES `imagetags` (`TagID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagetagslist`
--

LOCK TABLES `imagetagslist` WRITE;
/*!40000 ALTER TABLE `imagetagslist` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagetagslist` ENABLE KEYS */;
INSERT INTO `imagetagslist` VALUES (1,4,1),(2,26,1),(3,27,1),(4,43,1),(5,12,1),(6,3,1),(7,36,1),(8,17,1),(9,23,1),(10,21,1),(11,29,1),(12,16,1),(13,13,1),(14,46,1),(15,14,1),(16,35,1),(17,34,1),(18,7,1),(19,32,1),(20,45,1),(21,30,1),(22,6,1),(23,33,1),(24,20,1),(25,19,1),(26,38,1),(27,18,1),(28,8,1),(29,42,1),(30,24,1),(31,22,1),(32,25,1),(33,40,1),(34,44,1),(35,6,2),(36,4,2),(37,36,2),(38,1,2),(39,46,2),(40,16,2),(41,31,2),(42,25,2),(43,22,2),(44,21,2),(45,26,2),(46,40,2),(47,15,2),(48,27,2),(49,23,2),(50,18,2),(51,39,2),(52,14,2),(53,9,2),(54,24,2),(55,43,2),(56,2,2),(57,13,2),(58,28,2),(59,10,2),(60,38,2),(61,41,2),(62,29,2),(63,44,2),(64,11,2),(65,8,2),(66,42,2),(67,32,3),(68,20,3),(69,5,3),(70,46,3),(71,21,3),(72,36,3),(73,28,3),(74,35,3),(75,41,3),(76,43,3),(77,14,3),(78,40,3),(79,33,3),(80,10,3),(81,25,3),(82,44,3),(83,3,3),(84,45,3),(85,29,3),(86,2,3),(87,27,3),(88,9,3),(89,8,3),(90,31,3),(91,22,3),(92,1,3),(93,18,3),(94,4,3),(95,37,3),(96,13,3),(97,7,3),(98,23,3),(99,11,3),(100,15,3),(101,30,3),(102,12,3),(103,16,3),(104,5,4),(105,11,5),(106,15,5),(107,25,5),(108,6,6),(109,5,6),(110,11,7);
UNLOCK TABLES;

--
-- Table structure for table `patientimages`
--

DROP TABLE IF EXISTS `patientimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patientimages` (
  `ImageID` int NOT NULL AUTO_INCREMENT,
  `PatientID` int DEFAULT NULL,
  `ImageData` longblob,
  `IsRightEye` tinyint DEFAULT NULL,
  `Annotation` text,
  `ThumbnailData` blob,
  `ImageName` varchar(50) DEFAULT NULL,
  `DateCreated` datetime DEFAULT NULL,
  PRIMARY KEY (`ImageID`),
  KEY `PatientID` (`PatientID`),
  CONSTRAINT `patientimages_ibfk_1` FOREIGN KEY (`PatientID`) REFERENCES `patients` (`PatientID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patientimages`
--

LOCK TABLES `patientimages` WRITE;
/*!40000 ALTER TABLE `patientimages` DISABLE KEYS */;
/*!40000 ALTER TABLE `patientimages` ENABLE KEYS */;
INSERT INTO `patientimages` VALUES (1,5,'unknown_value_please_contact_support',1,'Image Annotation for Patient #5','unknown_value_please_contact_support','AB1980-08-24_2013-04-11_003.jpg','2023-10-24 12:11:50'),(2,1,'unknown_value_please_contact_support',1,'Image Annotation for Patient #1','unknown_value_please_contact_support','AC1950-06-12_2013-03-11_000.jpg','2023-10-24 12:11:50'),(3,5,'unknown_value_please_contact_support',1,'Image Annotation for Patient #5','unknown_value_please_contact_support','AP0001-01-01_2013-03-06_002.jpg','2023-10-24 12:11:50'),(4,5,'unknown_value_please_contact_support',0,'Image Annotation for Patient #5','unknown_value_please_contact_support','AP0001-01-01_2013-03-06_003.jpg','2023-10-24 12:11:50'),(5,4,'unknown_value_please_contact_support',0,'Image Annotation for Patient #4','unknown_value_please_contact_support','AP0001-01-01_2013-03-06_011.jpg','2023-10-24 12:11:50'),(6,9,'unknown_value_please_contact_support',1,'Image Annotation for Patient #9','unknown_value_please_contact_support','AP0001-01-01_2013-03-06_013.jpg','2023-10-24 12:11:50'),(7,10,'unknown_value_please_contact_support',0,'Image Annotation for Patient #10','unknown_value_please_contact_support','AP0001-01-01_2013-03-06_018.jpg','2023-10-24 12:11:50'),(8,2,'unknown_value_please_contact_support',0,'Image Annotation for Patient #2','unknown_value_please_contact_support','AP0001-01-01_2013-03-07_001.jpg','2023-10-24 12:11:50'),(9,9,'unknown_value_please_contact_support',1,'Image Annotation for Patient #9','unknown_value_please_contact_support','AP0001-01-01_2013-03-08_006.jpg','2023-10-24 12:11:50'),(10,1,'unknown_value_please_contact_support',0,'Image Annotation for Patient #1','unknown_value_please_contact_support','AP0001-01-01_2013-03-08_009.jpg','2023-10-24 12:11:50'),(11,9,'unknown_value_please_contact_support',0,'Image Annotation for Patient #9','unknown_value_please_contact_support','AP0001-01-01_2013-03-08_010.jpg','2023-10-24 12:11:50'),(12,6,'unknown_value_please_contact_support',1,'Image Annotation for Patient #6','unknown_value_please_contact_support','AP0001-01-01_2013-03-08_013.jpg','2023-10-24 12:11:50'),(13,7,'unknown_value_please_contact_support',0,'Image Annotation for Patient #7','unknown_value_please_contact_support','AP0001-01-01_2013-03-11_001.jpg','2023-10-24 12:11:50'),(14,9,'unknown_value_please_contact_support',1,'Image Annotation for Patient #9','unknown_value_please_contact_support','AP0001-01-01_2013-03-11_004.jpg','2023-10-24 12:11:50'),(15,8,'unknown_value_please_contact_support',1,'Image Annotation for Patient #8','unknown_value_please_contact_support','AP0001-01-01_2013-03-11_006.jpg','2023-10-24 12:11:50'),(16,4,'unknown_value_please_contact_support',1,'Image Annotation for Patient #4','unknown_value_please_contact_support','AP0001-01-01_2013-03-18_002.jpg','2023-10-24 12:11:50'),(17,9,'unknown_value_please_contact_support',0,'Image Annotation for Patient #9','unknown_value_please_contact_support','AP0001-01-01_2013-03-20_002.jpg','2023-10-24 12:11:50'),(18,2,'unknown_value_please_contact_support',1,'Image Annotation for Patient #2','unknown_value_please_contact_support','AP0001-01-01_2013-03-20_008.jpg','2023-10-24 12:11:50'),(19,4,'unknown_value_please_contact_support',1,'Image Annotation for Patient #4','unknown_value_please_contact_support','AP0001-01-01_2013-03-20_017.jpg','2023-10-24 12:11:50'),(20,7,'unknown_value_please_contact_support',1,'Image Annotation for Patient #7','unknown_value_please_contact_support','AP0001-01-01_2013-03-20_018.jpg','2023-10-24 12:11:50'),(21,6,'unknown_value_please_contact_support',1,'Image Annotation for Patient #6','unknown_value_please_contact_support','AP0001-01-01_2013-03-25_000.jpg','2023-10-24 12:11:50'),(22,2,'unknown_value_please_contact_support',0,'Image Annotation for Patient #2','unknown_value_please_contact_support','AP0001-01-01_2013-03-28_003.jpg','2023-10-24 12:11:50'),(23,6,'unknown_value_please_contact_support',1,'Image Annotation for Patient #6','unknown_value_please_contact_support','AP0001-01-01_2013-03-28_005.jpg','2023-10-24 12:11:50'),(24,9,'unknown_value_please_contact_support',0,'Image Annotation for Patient #9','unknown_value_please_contact_support','AP0001-01-01_2013-04-03_005.jpg','2023-10-24 12:11:50'),(25,4,'unknown_value_please_contact_support',1,'Image Annotation for Patient #4','unknown_value_please_contact_support','AP0001-01-01_2013-04-03_007.jpg','2023-10-24 12:11:50'),(26,5,'unknown_value_please_contact_support',1,'Image Annotation for Patient #5','unknown_value_please_contact_support','CA1981-08-18_2013-04-24_002.jpg','2023-10-24 12:11:50'),(27,3,'unknown_value_please_contact_support',1,'Image Annotation for Patient #3','unknown_value_please_contact_support','CD1995-12-22_2013-03-06_002.jpg','2023-10-24 12:11:50'),(28,7,'unknown_value_please_contact_support',0,'Image Annotation for Patient #7','unknown_value_please_contact_support','CD1995-12-22_2013-03-06_003.jpg','2023-10-24 12:11:50'),(29,6,'unknown_value_please_contact_support',0,'Image Annotation for Patient #6','unknown_value_please_contact_support','CD1995-12-22_2013-03-06_006.jpg','2023-10-24 12:11:50'),(30,8,'unknown_value_please_contact_support',1,'Image Annotation for Patient #8','unknown_value_please_contact_support','CN1946-01-06_2013-04-03_004.jpg','2023-10-24 12:11:50'),(31,9,'unknown_value_please_contact_support',1,'Image Annotation for Patient #9','unknown_value_please_contact_support','CR1963-03-03_2013-03-21_001.jpg','2023-10-24 12:11:50'),(32,5,'unknown_value_please_contact_support',0,'Image Annotation for Patient #5','unknown_value_please_contact_support','DD1901-01-01_2013-04-24_002.jpg','2023-10-24 12:11:50'),(33,3,'unknown_value_please_contact_support',1,'Image Annotation for Patient #3','unknown_value_please_contact_support','DD1901-01-01_2013-04-24_006.jpg','2023-10-24 12:11:50'),(34,4,'unknown_value_please_contact_support',1,'Image Annotation for Patient #4','unknown_value_please_contact_support','DD1901-01-01_2013-04-24_008.jpg','2023-10-24 12:11:50'),(35,9,'unknown_value_please_contact_support',1,'Image Annotation for Patient #9','unknown_value_please_contact_support','LB1935-07-21_2013-03-20_005.jpg','2023-10-24 12:11:50'),(36,1,'unknown_value_please_contact_support',0,'Image Annotation for Patient #1','unknown_value_please_contact_support','LB1935-07-21_2013-03-20_007.jpg','2023-10-24 12:11:50'),(37,2,'unknown_value_please_contact_support',1,'Image Annotation for Patient #2','unknown_value_please_contact_support','LB1935-07-21_2013-03-20_009.jpg','2023-10-24 12:11:50'),(38,3,'unknown_value_please_contact_support',0,'Image Annotation for Patient #3','unknown_value_please_contact_support','MC1965-05-13_2013-03-14_003.jpg','2023-10-24 12:11:50'),(39,2,'unknown_value_please_contact_support',1,'Image Annotation for Patient #2','unknown_value_please_contact_support','PT1900-01-01_2013-04-20_012.jpg','2023-10-24 12:11:50'),(40,5,'unknown_value_please_contact_support',0,'Image Annotation for Patient #5','unknown_value_please_contact_support','PT1900-01-01_2013-04-20_014.jpg','2023-10-24 12:11:50'),(41,9,'unknown_value_please_contact_support',1,'Image Annotation for Patient #9','unknown_value_please_contact_support','PT1900-01-01_2013-04-20_017.jpg','2023-10-24 12:11:50'),(42,6,'unknown_value_please_contact_support',1,'Image Annotation for Patient #6','unknown_value_please_contact_support','PW1946-02-12_2013-04-08_000.jpg','2023-10-24 12:11:50'),(43,1,'unknown_value_please_contact_support',0,'Image Annotation for Patient #1','unknown_value_please_contact_support','PW1946-02-12_2013-04-08_002.jpg','2023-10-24 12:11:50'),(44,8,'unknown_value_please_contact_support',0,'Image Annotation for Patient #8','unknown_value_please_contact_support','RR2000-01-01_2013-04-17_006.jpg','2023-10-24 12:11:50'),(45,10,'unknown_value_please_contact_support',1,'Image Annotation for Patient #10','unknown_value_please_contact_support','RR2000-01-01_2013-04-17_007.jpg','2023-10-24 12:11:50'),(46,7,'unknown_value_please_contact_support',0,'Image Annotation for Patient #7','unknown_value_please_contact_support','SN2000-01-01_2013-04-17_001.jpg','2023-10-24 12:11:50');
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `PatientID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `DateofBirth` date DEFAULT NULL,
  PRIMARY KEY (`PatientID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1,'Tyler','Rogers','1980-01-01'),(2,'Grace','Higgins','1985-01-01'),(3,'Melanie','Watson','1990-01-01'),(4,'Sally','Stiffany','1995-01-01'),(5,'Hailey','Carter','2000-01-01'),(6,'Brad','Rogers','2001-01-01'),(7,'Penelope','Grant','2002-01-01'),(8,'Frederick','Warren','1998-01-01'),(9,'Sally','Jones','2000-01-01'),(10,'Sofia','Cooper','1987-01-01');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producer`
--

DROP TABLE IF EXISTS `producer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producer` (
  `ProducerID` varchar(36) NOT NULL,
  PRIMARY KEY (`ProducerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producer`
--

LOCK TABLES `producer` WRITE;
/*!40000 ALTER TABLE `producer` DISABLE KEYS */;
/*!40000 ALTER TABLE `producer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workqueue`
--

DROP TABLE IF EXISTS `workqueue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workqueue` (
  `workId` int NOT NULL AUTO_INCREMENT,
  `PatientId` int NOT NULL,
  `InsertDateTime` datetime NOT NULL,
  `Seen` tinyint DEFAULT NULL,
  PRIMARY KEY (`workId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workqueue`
--

LOCK TABLES `workqueue` WRITE;
/*!40000 ALTER TABLE `workqueue` DISABLE KEYS */;
/*!40000 ALTER TABLE `workqueue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'eyecameradb'
--

--
-- Dumping routines for database 'eyecameradb'
--
/*!50003 DROP PROCEDURE IF EXISTS `sp_AddWorkQueueItem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_AddWorkQueueItem`(IN patient_id INT)
BEGIN
	update workqueue set Seen = true where PatientId = patient_id;
	insert into workqueue (PatientId, InsertDateTime, Seen) Values (patient_id, Now(), false);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_deleteImage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_deleteImage`(IN image_id INT)
BEGIN
	delete from imagetags where ImageId = image_id;
    delete from patientImages where ImageId = image_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_DeleteTag` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_DeleteTag`(IN tag_id INT)
BEGIN
	delete from imagetags where TagId = tag_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_findPatient` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_findPatient`(IN id INT, IN fName Varchar(50), IN lName Varchar(50))
BEGIN
	IF ID > 0 THEN
        
        SELECT *
        FROM patients
        WHERE patientID = Id;
    ELSEIF Length(FName) > 0 THEN
        
        SELECT *
        FROM patients
        WHERE FirstName like CONCAT('%', fName, '%')
        and LastName like CONCAT('%', lName, '%');
	ELSEIF Length(lName) > 0 THEN
		Select *
        From Patients
        where LastName like CONCAT('%', lName, '%');
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetImageTags` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetImageTags`(IN Image_id INT)
BEGIN
	Select * from imagetags where ImageID = Image_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetLastEmptyPatientImage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetLastEmptyPatientImage`(IN patient_id INT)
BEGIN
	Select * from patientimages where ImageData IS NULL
    Order by PatientId DESC
    Limit 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetPatientImage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetPatientImage`(IN image_id INT)
BEGIN
	Select * from patientimages where ImageID = Image_id;
    Select * from imagetags where ImageId = image_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetPatientImages` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetPatientImages`(IN patient_id INT)
BEGIN
	Select * from patients where PatientId = patient_id;
	Select * from patientImages where PatientId = patient_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetPatientThumbnailImages` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetPatientThumbnailImages`(IN patient_id INT)
BEGIN
	Select * from patients where PatientId = patient_id;
	Select ImageId, PatientID, IsRightEye, Annotation, ThumbnailData from patientImages where PatientId = patient_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getTags` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getTags`(IN image_id INT)
BEGIN
	Select * from imagetags where ImageId = image_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetWorkQueue` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetWorkQueue`()
BEGIN
	Select 
		w.workId, 
		w.PatientId, 
		w.InsertDateTime, 
		w.Seen, 
		CONCAT(p.FirstName, ' ', p.LastName) as patientName
    from 
		workqueue as w 
	join 
		patients p on p.PatientID = w.PatientId 
	where InsertDateTime > Date_Sub(Now(), INTERVAL 1 DAY)
    and w.Seen = false;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_InsertPatient` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_InsertPatient`(IN fName Varchar(50), IN lName Varchar(50))
BEGIN
	insert into patients (FirstName, LastName) 
    values (fName, lName);
    
    Select last_insert_id() as PatientID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_InsertPatientImage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_InsertPatientImage`(IN PatientId INT, IN ImageData LONGBLOB, IN IsRightEye bool, IN Annotation TEXT)
BEGIN
	INSERT INTO patientimages (PatientID, ImageData, IsRightEye, Annotation)
    Values (PatientId, ImageData, IsRightEye, Annotation);
    
    Select last_insert_id() as ImageId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_InsertTag` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_InsertTag`(IN image_id INT, IN tag VarChar(50))
BEGIN
	insert into imagetags (ImageId, Tag) values (image_id, tag);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_SetWorkQueueItemSeen` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_SetWorkQueueItemSeen`(IN patient_Id INT)
BEGIN
	update workqueue set Seen = true where PatientId = patient_Id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_UpdatePatientImage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_UpdatePatientImage`(IN image_id INT, IN IsRightEye bool, IN Annotation Text)
BEGIN
	Update patientimages set patientimages.IsRightEye = IsRightEye,  patientimages.Annotation = Annotation 
    where ImageId = image_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_UpdatePatientImageData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_UpdatePatientImageData`(IN image_id INT, IN imgData LONGBLOB, IN thumbImageData BLOB)
BEGIN
	Update patientimages set patientimages.ImageData = imgData, ThumbnailData = thumbImageData
    where ImageId = image_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_UpdateTag` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_UpdateTag`(IN tag_id INT, IN tag VarChar(50))
BEGIN
	update imagetags set Tag = tag where TagId = tag_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-13 16:10:12
