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
) ENGINE=InnoDB AUTO_INCREMENT=240 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenotes`
--

LOCK TABLES `imagenotes` WRITE;
/*!40000 ALTER TABLE `imagenotes` DISABLE KEYS */;
INSERT INTO `imagenotes` VALUES (1,'Automatically generated note #1 for image 35','2023-10-20 14:13:14',35),(2,'Automatically generated note #2 for image 56','2023-10-28 21:18:51',56),(3,'Automatically generated note #3 for image 34','2023-10-28 11:08:30',34),(4,'Automatically generated note #4 for image 11','2023-10-28 21:26:40',11),(5,'Automatically generated note #5 for image 14','2023-10-27 23:36:40',14),(6,'Automatically generated note #6 for image 26','2023-10-21 07:02:07',26),(7,'Automatically generated note #7 for image 51','2023-10-28 15:11:29',51),(8,'Automatically generated note #8 for image 11','2023-10-22 10:11:31',11),(9,'Automatically generated note #9 for image 5','2023-10-20 18:28:06',5),(10,'Automatically generated note #10 for image 17','2023-10-28 10:08:45',17),(11,'Automatically generated note #11 for image 38','2023-10-23 18:33:12',38),(12,'Automatically generated note #12 for image 52','2023-10-28 13:05:47',52),(13,'Automatically generated note #13 for image 8','2023-10-27 04:24:26',8),(14,'Automatically generated note #14 for image 52','2023-10-25 11:07:02',52),(15,'Automatically generated note #15 for image 28','2023-10-27 22:59:55',28),(16,'Automatically generated note #16 for image 3','2023-10-28 14:44:15',3),(17,'Automatically generated note #17 for image 48','2023-10-21 22:10:54',48),(18,'Automatically generated note #18 for image 53','2023-10-26 20:05:50',53),(19,'Automatically generated note #19 for image 6','2023-10-28 10:10:30',6),(20,'Automatically generated note #20 for image 13','2023-10-23 05:39:46',13),(21,'Automatically generated note #21 for image 53','2023-10-29 15:53:49',53),(22,'Automatically generated note #22 for image 10','2023-10-27 15:58:31',10),(23,'Automatically generated note #23 for image 29','2023-10-22 00:24:35',29),(24,'Automatically generated note #24 for image 23','2023-10-22 05:18:58',23),(25,'Automatically generated note #25 for image 42','2023-10-29 01:01:04',42),(26,'Automatically generated note #26 for image 52','2023-10-27 17:24:56',52),(27,'Automatically generated note #27 for image 9','2023-10-27 01:36:56',9),(28,'Automatically generated note #28 for image 42','2023-10-27 15:49:21',42),(29,'Automatically generated note #29 for image 10','2023-10-27 01:29:53',10),(30,'Automatically generated note #30 for image 30','2023-10-28 02:53:16',30),(31,'Automatically generated note #31 for image 28','2023-10-27 16:40:29',28),(32,'Automatically generated note #32 for image 43','2023-10-23 20:32:57',43),(33,'Automatically generated note #33 for image 45','2023-10-23 14:49:48',45),(34,'Automatically generated note #34 for image 24','2023-10-24 21:59:38',24),(35,'Automatically generated note #35 for image 54','2023-10-22 01:53:16',54),(36,'Automatically generated note #36 for image 2','2023-10-22 11:39:32',2),(37,'Automatically generated note #37 for image 30','2023-10-22 19:43:56',30),(38,'Automatically generated note #38 for image 31','2023-10-23 03:47:23',31),(39,'Automatically generated note #39 for image 2','2023-10-22 03:02:09',2),(40,'Automatically generated note #40 for image 13','2023-10-28 23:20:48',13),(41,'Automatically generated note #41 for image 14','2023-10-21 07:31:40',14),(42,'Automatically generated note #42 for image 15','2023-10-22 19:25:55',15),(43,'Automatically generated note #43 for image 41','2023-10-22 13:35:29',41),(44,'Automatically generated note #44 for image 32','2023-10-24 13:20:57',32),(45,'Automatically generated note #45 for image 30','2023-10-21 23:38:54',30),(46,'Automatically generated note #46 for image 53','2023-10-27 11:59:18',53),(47,'Automatically generated note #47 for image 45','2023-10-28 04:49:42',45),(48,'Automatically generated note #48 for image 40','2023-10-30 10:15:38',40),(49,'Automatically generated note #49 for image 2','2023-10-29 13:06:26',2),(50,'Automatically generated note #50 for image 45','2023-10-23 14:56:19',45),(51,'Automatically generated note #51 for image 3','2023-10-25 17:01:27',3),(52,'Automatically generated note #52 for image 47','2023-10-21 17:44:46',47),(53,'Automatically generated note #53 for image 14','2023-10-29 06:54:48',14),(54,'Automatically generated note #54 for image 39','2023-10-25 23:22:08',39),(55,'Automatically generated note #55 for image 48','2023-10-21 11:37:46',48),(56,'Automatically generated note #56 for image 41','2023-10-30 07:34:23',41),(57,'Automatically generated note #57 for image 52','2023-10-25 02:09:32',52),(58,'Automatically generated note #58 for image 42','2023-10-23 17:07:45',42),(59,'Automatically generated note #59 for image 28','2023-10-28 18:12:26',28),(60,'Automatically generated note #60 for image 49','2023-10-26 07:57:29',49),(61,'Automatically generated note #61 for image 53','2023-10-24 08:56:15',53),(62,'Automatically generated note #62 for image 17','2023-10-22 13:54:37',17),(63,'Automatically generated note #63 for image 27','2023-10-27 08:37:28',27),(64,'Automatically generated note #64 for image 51','2023-10-26 16:09:42',51),(65,'Automatically generated note #65 for image 30','2023-10-27 14:39:08',30),(66,'Automatically generated note #66 for image 29','2023-10-30 01:41:52',29),(67,'Automatically generated note #67 for image 31','2023-10-24 07:20:44',31),(68,'Automatically generated note #68 for image 51','2023-10-27 11:45:24',51),(69,'Automatically generated note #69 for image 34','2023-10-22 09:56:32',34),(70,'Automatically generated note #70 for image 21','2023-10-30 23:54:28',21),(71,'Automatically generated note #71 for image 52','2023-10-27 19:30:46',52),(72,'Automatically generated note #72 for image 10','2023-10-27 06:35:31',10),(73,'Automatically generated note #73 for image 12','2023-10-26 03:23:18',12),(74,'Automatically generated note #74 for image 41','2023-10-23 18:05:39',41),(75,'Automatically generated note #75 for image 51','2023-10-21 20:23:51',51),(76,'Automatically generated note #76 for image 53','2023-10-25 05:00:31',53),(77,'Automatically generated note #77 for image 31','2023-10-20 18:41:48',31),(78,'Automatically generated note #78 for image 40','2023-10-29 03:54:25',40),(79,'Automatically generated note #79 for image 56','2023-10-24 19:56:05',56),(80,'Automatically generated note #80 for image 2','2023-10-20 23:08:31',2),(81,'Automatically generated note #81 for image 45','2023-10-27 01:30:50',45),(82,'Automatically generated note #82 for image 34','2023-10-25 02:56:04',34),(83,'Automatically generated note #83 for image 48','2023-10-24 08:39:46',48),(84,'Automatically generated note #84 for image 6','2023-10-20 17:43:21',6),(85,'Automatically generated note #85 for image 13','2023-10-20 07:47:49',13),(86,'Automatically generated note #86 for image 8','2023-10-30 23:44:39',8),(87,'Automatically generated note #87 for image 9','2023-10-28 13:57:12',9),(88,'Automatically generated note #88 for image 52','2023-10-26 18:32:21',52),(89,'Automatically generated note #89 for image 32','2023-10-25 04:05:31',32),(90,'Automatically generated note #90 for image 42','2023-10-21 11:08:22',42),(91,'Automatically generated note #91 for image 8','2023-10-29 14:19:16',8),(92,'Automatically generated note #92 for image 22','2023-10-20 06:58:52',22),(93,'Automatically generated note #93 for image 35','2023-10-25 09:06:06',35),(94,'Automatically generated note #94 for image 42','2023-10-24 06:34:01',42),(95,'Automatically generated note #95 for image 52','2023-10-27 01:47:24',52),(96,'Automatically generated note #96 for image 45','2023-10-23 04:09:44',45),(97,'Automatically generated note #97 for image 52','2023-10-22 11:08:54',52),(98,'Automatically generated note #98 for image 32','2023-10-20 22:56:33',32),(99,'Automatically generated note #99 for image 12','2023-10-30 11:06:26',12),(100,'Automatically generated note #100 for image 7','2023-10-23 07:02:37',7),(101,'Automatically generated note #101 for image 8','2023-10-22 04:42:55',8),(102,'Automatically generated note #102 for image 32','2023-10-24 06:55:38',32),(103,'Automatically generated note #103 for image 11','2023-10-29 14:02:38',11),(104,'Automatically generated note #104 for image 17','2023-10-20 09:15:46',17),(105,'Automatically generated note #105 for image 22','2023-10-22 00:38:08',22),(106,'Automatically generated note #106 for image 42','2023-10-25 01:06:15',42),(107,'Automatically generated note #107 for image 37','2023-10-28 13:53:01',37),(108,'Automatically generated note #108 for image 8','2023-10-22 23:05:04',8),(109,'Automatically generated note #109 for image 2','2023-10-30 01:37:27',2),(110,'Automatically generated note #110 for image 53','2023-10-20 04:03:49',53),(111,'Automatically generated note #111 for image 29','2023-10-23 04:13:01',29),(112,'Automatically generated note #112 for image 56','2023-10-20 11:27:51',56),(113,'Automatically generated note #113 for image 37','2023-10-23 12:56:37',37),(114,'Automatically generated note #114 for image 17','2023-10-29 03:28:21',17),(115,'Automatically generated note #115 for image 47','2023-10-23 14:02:35',47),(116,'Automatically generated note #116 for image 19','2023-10-21 09:36:00',19),(117,'Automatically generated note #117 for image 19','2023-10-26 21:10:03',19),(118,'Automatically generated note #118 for image 49','2023-10-24 20:15:52',49),(119,'Automatically generated note #119 for image 30','2023-10-25 17:11:53',30),(120,'Automatically generated note #120 for image 19','2023-10-22 17:21:30',19),(121,'Automatically generated note #121 for image 32','2023-10-24 05:24:21',32),(122,'Automatically generated note #122 for image 39','2023-10-28 06:55:09',39),(123,'Automatically generated note #123 for image 43','2023-10-29 09:54:17',43),(124,'Automatically generated note #124 for image 25','2023-10-22 12:30:26',25),(125,'Automatically generated note #125 for image 32','2023-10-20 17:55:23',32),(126,'Automatically generated note #126 for image 55','2023-10-21 22:11:41',55),(127,'Automatically generated note #127 for image 51','2023-10-30 03:21:41',51),(128,'Automatically generated note #128 for image 25','2023-10-21 23:05:10',25),(129,'Automatically generated note #129 for image 40','2023-10-21 18:27:46',40),(130,'Automatically generated note #130 for image 35','2023-10-27 06:00:46',35),(131,'Automatically generated note #131 for image 12','2023-10-29 13:09:31',12),(132,'Automatically generated note #132 for image 10','2023-10-23 07:12:17',10),(133,'Automatically generated note #133 for image 53','2023-10-27 12:36:35',53),(134,'Automatically generated note #134 for image 9','2023-10-25 03:00:57',9),(135,'Automatically generated note #135 for image 22','2023-10-28 21:57:33',22),(136,'Automatically generated note #136 for image 10','2023-10-21 23:03:08',10),(137,'Automatically generated note #137 for image 39','2023-10-27 14:03:58',39),(138,'Automatically generated note #138 for image 17','2023-10-30 17:38:33',17),(139,'Automatically generated note #139 for image 26','2023-10-24 11:24:31',26),(140,'Automatically generated note #140 for image 24','2023-10-30 13:42:36',24),(141,'Automatically generated note #141 for image 44','2023-10-28 05:21:44',44),(142,'Automatically generated note #142 for image 12','2023-10-26 11:38:00',12),(143,'Automatically generated note #143 for image 32','2023-10-28 21:16:13',32),(144,'Automatically generated note #144 for image 38','2023-10-22 10:26:07',38),(145,'Automatically generated note #145 for image 41','2023-10-20 08:56:38',41),(146,'Automatically generated note #146 for image 47','2023-10-20 05:12:41',47),(147,'Automatically generated note #147 for image 31','2023-10-20 02:40:20',31),(148,'Automatically generated note #148 for image 55','2023-10-24 23:17:47',55),(149,'Automatically generated note #149 for image 19','2023-10-20 08:44:40',19),(150,'Automatically generated note #150 for image 13','2023-10-25 22:05:15',13),(151,'Automatically generated note #151 for image 8','2023-10-23 23:48:27',8),(152,'Automatically generated note #152 for image 4','2023-10-24 13:06:00',4),(153,'Automatically generated note #153 for image 25','2023-10-24 20:27:15',25),(154,'Automatically generated note #154 for image 9','2023-10-27 21:49:57',9),(155,'Automatically generated note #155 for image 23','2023-10-21 06:00:07',23),(156,'Automatically generated note #156 for image 35','2023-10-27 21:43:40',35),(157,'Automatically generated note #157 for image 29','2023-10-26 22:01:09',29),(158,'Automatically generated note #158 for image 37','2023-10-28 02:49:55',37),(159,'Automatically generated note #159 for image 40','2023-10-27 21:33:16',40),(160,'Automatically generated note #160 for image 28','2023-10-26 19:50:28',28),(161,'Automatically generated note #161 for image 52','2023-10-30 19:24:57',52),(162,'Automatically generated note #162 for image 16','2023-10-24 03:38:38',16),(163,'Automatically generated note #163 for image 29','2023-10-30 16:38:48',29),(164,'Automatically generated note #164 for image 41','2023-10-28 17:12:44',41),(165,'Automatically generated note #165 for image 23','2023-10-23 01:53:05',23),(166,'Automatically generated note #166 for image 3','2023-10-27 23:19:51',3),(167,'Automatically generated note #167 for image 19','2023-10-20 21:46:17',19),(168,'Automatically generated note #168 for image 1','2023-10-28 19:53:24',1),(169,'Automatically generated note #169 for image 48','2023-10-22 07:54:05',48),(170,'Automatically generated note #170 for image 11','2023-10-24 15:50:02',11),(171,'Automatically generated note #171 for image 19','2023-10-22 11:52:29',19),(172,'Automatically generated note #172 for image 1','2023-10-21 11:47:53',1),(173,'Automatically generated note #173 for image 38','2023-10-23 02:38:32',38),(174,'Automatically generated note #174 for image 16','2023-10-30 01:48:42',16),(175,'Automatically generated note #175 for image 38','2023-10-30 16:38:02',38),(176,'Automatically generated note #176 for image 43','2023-10-26 05:14:26',43),(177,'Automatically generated note #177 for image 9','2023-10-23 05:34:41',9),(178,'Automatically generated note #178 for image 2','2023-10-22 02:36:02',2),(179,'Automatically generated note #179 for image 19','2023-10-29 20:16:42',19),(180,'Automatically generated note #180 for image 8','2023-10-23 23:02:35',8),(181,'Automatically generated note #181 for image 45','2023-10-22 09:31:35',45),(182,'Automatically generated note #182 for image 39','2023-10-25 17:45:15',39),(183,'Automatically generated note #183 for image 44','2023-10-27 14:36:09',44),(184,'Automatically generated note #184 for image 45','2023-10-20 20:18:16',45),(185,'Automatically generated note #185 for image 43','2023-10-29 20:39:12',43),(186,'Automatically generated note #186 for image 21','2023-10-29 06:26:27',21),(187,'Automatically generated note #187 for image 49','2023-10-20 09:46:24',49),(188,'Automatically generated note #188 for image 12','2023-10-22 04:33:54',12),(189,'Automatically generated note #189 for image 6','2023-10-27 12:56:31',6),(190,'Automatically generated note #190 for image 42','2023-10-24 09:17:30',42),(191,'Automatically generated note #191 for image 25','2023-10-24 01:51:10',25),(192,'Automatically generated note #192 for image 40','2023-10-22 14:21:27',40),(193,'Automatically generated note #193 for image 21','2023-10-27 11:34:31',21),(194,'Automatically generated note #194 for image 4','2023-10-20 03:27:39',4),(195,'Automatically generated note #195 for image 37','2023-10-23 02:26:05',37),(196,'Automatically generated note #196 for image 24','2023-10-23 09:01:01',24),(197,'Automatically generated note #197 for image 6','2023-10-28 19:12:53',6),(198,'Automatically generated note #198 for image 50','2023-10-21 07:26:35',50),(199,'Automatically generated note #199 for image 18','2023-10-28 22:51:14',18),(200,'Automatically generated note #200 for image 49','2023-10-28 05:56:53',49),(201,'Automatically generated note #201 for image 18','2023-10-22 23:43:47',18),(202,'Automatically generated note #202 for image 43','2023-10-20 00:37:48',43),(203,'Automatically generated note #203 for image 23','2023-10-28 00:25:06',23),(204,'Automatically generated note #204 for image 10','2023-10-29 21:46:25',10),(205,'Automatically generated note #205 for image 5','2023-10-25 22:13:57',5),(206,'Automatically generated note #206 for image 9','2023-10-26 22:56:49',9),(207,'Automatically generated note #207 for image 55','2023-10-24 05:54:04',55),(208,'Automatically generated note #208 for image 1','2023-10-20 10:38:53',1),(209,'Automatically generated note #209 for image 15','2023-10-28 23:59:45',15),(210,'Automatically generated note #210 for image 36','2023-10-25 17:23:08',36),(211,'Automatically generated note #211 for image 4','2023-10-22 15:40:39',4),(212,'Automatically generated note #212 for image 22','2023-10-28 17:42:44',22),(213,'Automatically generated note #213 for image 51','2023-10-26 17:15:53',51),(214,'Automatically generated note #214 for image 8','2023-10-26 09:18:35',8),(215,'Automatically generated note #215 for image 21','2023-10-24 14:41:13',21),(216,'Automatically generated note #216 for image 33','2023-10-22 09:38:02',33),(217,'Automatically generated note #217 for image 39','2023-10-30 09:03:52',39),(218,'Automatically generated note #218 for image 39','2023-10-20 16:21:15',39),(219,'Automatically generated note #219 for image 46','2023-10-20 18:43:38',46),(220,'Automatically generated note #220 for image 38','2023-10-20 10:29:22',38),(221,'Automatically generated note #221 for image 8','2023-10-29 01:30:01',8),(222,'Automatically generated note #222 for image 53','2023-10-23 17:24:44',53),(223,'Automatically generated note #223 for image 50','2023-10-26 02:42:38',50),(224,'Automatically generated note #224 for image 14','2023-10-29 18:31:49',14),(225,'Automatically generated note #225 for image 49','2023-10-26 06:21:24',49),(226,'Automatically generated note #226 for image 36','2023-10-27 23:57:24',36),(227,'Automatically generated note #227 for image 45','2023-10-27 20:27:00',45),(228,'Automatically generated note #228 for image 29','2023-10-20 05:26:19',29),(229,'Automatically generated note #229 for image 48','2023-10-24 10:21:38',48),(230,'Automatically generated note #230 for image 1','2023-10-25 05:59:16',1),(231,'Automatically generated note #231 for image 56','2023-10-20 10:41:52',56),(232,'Automatically generated note #232 for image 54','2023-10-30 03:43:39',54),(233,'Automatically generated note #233 for image 16','2023-10-30 09:05:18',16),(234,'Automatically generated note #234 for image 14','2023-10-23 02:56:31',14),(235,'Automatically generated note #235 for image 45','2023-10-20 03:22:47',45),(236,'Automatically generated note #236 for image 4','2023-10-26 16:42:45',4),(237,'Automatically generated note #237 for image 22','2023-10-30 03:33:35',22),(238,'Automatically generated note #238 for image 43','2023-10-27 11:21:34',43),(239,'Automatically generated note #239 for image 28','2023-10-23 04:12:14',28);
/*!40000 ALTER TABLE `imagenotes` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagetags`
--

LOCK TABLES `imagetags` WRITE;
/*!40000 ALTER TABLE `imagetags` DISABLE KEYS */;
INSERT INTO `imagetags` VALUES (1,NULL,'tag_1',31),(2,NULL,'tag_2',31),(3,NULL,'tag_3',36);
/*!40000 ALTER TABLE `imagetags` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagetagslist`
--

LOCK TABLES `imagetagslist` WRITE;
/*!40000 ALTER TABLE `imagetagslist` DISABLE KEYS */;
INSERT INTO `imagetagslist` VALUES (1,11,1),(2,38,1),(3,44,1),(4,49,1),(5,48,1),(6,29,1),(7,54,1),(8,34,1),(9,3,1),(10,53,1),(11,25,1),(12,39,1),(13,46,1),(14,18,1),(15,16,1),(16,56,1),(17,4,1),(18,33,1),(19,51,1),(20,7,1),(21,40,1),(22,30,1),(23,52,1),(24,28,1),(25,26,1),(26,36,1),(27,15,1),(28,43,1),(29,1,1),(30,2,1),(31,47,1),(32,40,2),(33,14,2),(34,38,2),(35,30,2),(36,31,2),(37,19,2),(38,35,2),(39,6,2),(40,22,2),(41,21,2),(42,17,2),(43,39,2),(44,4,2),(45,9,2),(46,8,2),(47,52,2),(48,34,2),(49,26,2),(50,43,2),(51,25,2),(52,46,2),(53,41,2),(54,2,2),(55,28,2),(56,50,2),(57,51,2),(58,11,2),(59,47,2),(60,36,2),(61,49,2),(62,42,2),(63,38,3),(64,23,3),(65,17,3),(66,56,3),(67,22,3),(68,41,3),(69,27,3),(70,30,3),(71,43,3),(72,11,3),(73,19,3),(74,31,3),(75,37,3),(76,32,3),(77,35,3),(78,40,3),(79,14,3),(80,6,3),(81,20,3),(82,36,3),(83,26,3),(84,28,3),(85,33,3),(86,45,3),(87,52,3),(88,3,3),(89,21,3),(90,18,3),(91,7,3),(92,53,3),(93,55,3),(94,44,3),(95,13,3),(96,50,3),(97,39,3),(98,9,3);
/*!40000 ALTER TABLE `imagetagslist` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patientimages`
--

LOCK TABLES `patientimages` WRITE;
/*!40000 ALTER TABLE `patientimages` DISABLE KEYS */;
INSERT INTO `patientimages` VALUES (1,4,NULL,1,'Image Annotation for Patient #4',NULL,'AB1980-08-24_2013-04-11_003.jpg','2023-10-24 16:16:46'),(2,8,NULL,0,'Image Annotation for Patient #8',NULL,'AC1950-06-12_2013-03-11_000.jpg','2023-10-24 09:10:56'),(3,4,NULL,0,'Image Annotation for Patient #4',NULL,'AP0001-01-01_2013-03-06v_000.mp4','2023-10-26 17:38:30'),(4,5,NULL,0,'Image Annotation for Patient #5',NULL,'AP0001-01-01_2013-03-06_002.jpg','2023-10-23 01:41:26'),(5,3,NULL,1,'Image Annotation for Patient #3',NULL,'AP0001-01-01_2013-03-06_003.jpg','2023-10-26 08:51:33'),(6,8,NULL,0,'Image Annotation for Patient #8',NULL,'AP0001-01-01_2013-03-06_011.jpg','2023-10-21 21:44:27'),(7,8,NULL,0,'Image Annotation for Patient #8',NULL,'AP0001-01-01_2013-03-06_013.jpg','2023-10-25 00:39:46'),(8,3,NULL,0,'Image Annotation for Patient #3',NULL,'AP0001-01-01_2013-03-06_018.jpg','2023-10-22 23:54:21'),(9,1,NULL,0,'Image Annotation for Patient #1',NULL,'AP0001-01-01_2013-03-07_001.jpg','2023-10-28 23:15:32'),(10,2,NULL,0,'Image Annotation for Patient #2',NULL,'AP0001-01-01_2013-03-08_006.jpg','2023-10-24 23:18:36'),(11,7,NULL,1,'Image Annotation for Patient #7',NULL,'AP0001-01-01_2013-03-08_009.jpg','2023-10-25 16:00:24'),(12,4,NULL,0,'Image Annotation for Patient #4',NULL,'AP0001-01-01_2013-03-08_010.jpg','2023-10-21 05:44:38'),(13,10,NULL,0,'Image Annotation for Patient #10',NULL,'AP0001-01-01_2013-03-08_013.jpg','2023-10-20 08:08:34'),(14,3,NULL,1,'Image Annotation for Patient #3',NULL,'AP0001-01-01_2013-03-11_001.jpg','2023-10-26 20:23:47'),(15,9,NULL,1,'Image Annotation for Patient #9',NULL,'AP0001-01-01_2013-03-11_004.jpg','2023-10-26 21:10:46'),(16,2,NULL,0,'Image Annotation for Patient #2',NULL,'AP0001-01-01_2013-03-11_006.jpg','2023-10-26 00:35:36'),(17,5,NULL,1,'Image Annotation for Patient #5',NULL,'AP0001-01-01_2013-03-18_002.jpg','2023-10-27 06:20:02'),(18,8,NULL,0,'Image Annotation for Patient #8',NULL,'AP0001-01-01_2013-03-20_002.jpg','2023-10-20 20:52:10'),(19,10,NULL,0,'Image Annotation for Patient #10',NULL,'AP0001-01-01_2013-03-20_008.jpg','2023-10-28 17:56:51'),(20,5,NULL,0,'Image Annotation for Patient #5',NULL,'AP0001-01-01_2013-03-20_017.jpg','2023-10-26 00:23:23'),(21,1,NULL,0,'Image Annotation for Patient #1',NULL,'AP0001-01-01_2013-03-20_018.jpg','2023-10-22 04:29:04'),(22,6,NULL,0,'Image Annotation for Patient #6',NULL,'AP0001-01-01_2013-03-25_000.jpg','2023-10-29 10:45:23'),(23,5,NULL,0,'Image Annotation for Patient #5',NULL,'AP0001-01-01_2013-03-28v_000.mp4','2023-10-30 05:05:37'),(24,6,NULL,0,'Image Annotation for Patient #6',NULL,'AP0001-01-01_2013-03-28_003.jpg','2023-10-21 05:49:25'),(25,1,NULL,1,'Image Annotation for Patient #1',NULL,'AP0001-01-01_2013-03-28_005.jpg','2023-10-30 01:07:04'),(26,9,NULL,0,'Image Annotation for Patient #9',NULL,'AP0001-01-01_2013-04-03v_000.mp4','2023-10-26 20:32:20'),(27,3,NULL,1,'Image Annotation for Patient #3',NULL,'AP0001-01-01_2013-04-03v_001.mp4','2023-10-23 02:34:59'),(28,2,NULL,1,'Image Annotation for Patient #2',NULL,'AP0001-01-01_2013-04-03v_002.mp4','2023-10-30 06:09:58'),(29,9,NULL,1,'Image Annotation for Patient #9',NULL,'AP0001-01-01_2013-04-03_005.jpg','2023-10-27 20:33:46'),(30,3,NULL,0,'Image Annotation for Patient #3',NULL,'AP0001-01-01_2013-04-03_007.jpg','2023-10-29 23:51:56'),(31,4,NULL,1,'Image Annotation for Patient #4',NULL,'AP0001-01-01_2013-04-18v_000.mp4','2023-10-28 05:29:52'),(32,9,NULL,1,'Image Annotation for Patient #9',NULL,'AP0001-01-01_2013-04-18v_001.mp4','2023-10-22 18:18:49'),(33,7,NULL,0,'Image Annotation for Patient #7',NULL,'AP0001-01-01_2013-04-18v_002.mp4','2023-10-28 04:39:46'),(34,2,NULL,0,'Image Annotation for Patient #2',NULL,'CA1981-08-18_2013-04-24v_000.mp4','2023-10-27 08:18:55'),(35,10,NULL,1,'Image Annotation for Patient #10',NULL,'CA1981-08-18_2013-04-24v_001.mp4','2023-10-24 01:43:40'),(36,10,NULL,1,'Image Annotation for Patient #10',NULL,'CA1981-08-18_2013-04-24_002.jpg','2023-10-20 10:08:18'),(37,4,NULL,0,'Image Annotation for Patient #4',NULL,'CD1995-12-22_2013-03-06_002.jpg','2023-10-26 02:13:49'),(38,3,NULL,1,'Image Annotation for Patient #3',NULL,'CD1995-12-22_2013-03-06_003.jpg','2023-10-22 04:24:45'),(39,9,NULL,1,'Image Annotation for Patient #9',NULL,'CD1995-12-22_2013-03-06_006.jpg','2023-10-22 13:47:56'),(40,7,NULL,1,'Image Annotation for Patient #7',NULL,'CN1946-01-06_2013-04-03_004.jpg','2023-10-22 15:40:19'),(41,10,NULL,0,'Image Annotation for Patient #10',NULL,'CR1963-03-03_2013-03-21_001.jpg','2023-10-21 01:20:42'),(42,8,NULL,1,'Image Annotation for Patient #8',NULL,'DD1901-01-01_2013-04-24_002.jpg','2023-10-27 13:07:02'),(43,5,NULL,1,'Image Annotation for Patient #5',NULL,'DD1901-01-01_2013-04-24_006.jpg','2023-10-29 15:46:52'),(44,10,NULL,1,'Image Annotation for Patient #10',NULL,'DD1901-01-01_2013-04-24_008.jpg','2023-10-24 22:40:51'),(45,5,NULL,1,'Image Annotation for Patient #5',NULL,'LB1935-07-21_2013-03-20_005.jpg','2023-10-29 11:28:04'),(46,4,NULL,0,'Image Annotation for Patient #4',NULL,'LB1935-07-21_2013-03-20_007.jpg','2023-10-20 16:44:44'),(47,7,NULL,0,'Image Annotation for Patient #7',NULL,'LB1935-07-21_2013-03-20_009.jpg','2023-10-30 16:10:57'),(48,2,NULL,0,'Image Annotation for Patient #2',NULL,'MC1965-05-13_2013-03-14_003.jpg','2023-10-26 06:53:44'),(49,5,NULL,0,'Image Annotation for Patient #5',NULL,'PT1900-01-01_2013-04-20_012.jpg','2023-10-23 16:44:44'),(50,1,NULL,1,'Image Annotation for Patient #1',NULL,'PT1900-01-01_2013-04-20_014.jpg','2023-10-26 18:08:59'),(51,8,NULL,1,'Image Annotation for Patient #8',NULL,'PT1900-01-01_2013-04-20_017.jpg','2023-10-28 21:14:35'),(52,10,NULL,0,'Image Annotation for Patient #10',NULL,'PW1946-02-12_2013-04-08_000.jpg','2023-10-21 03:02:17'),(53,2,NULL,1,'Image Annotation for Patient #2',NULL,'PW1946-02-12_2013-04-08_002.jpg','2023-10-20 13:38:01'),(54,5,NULL,1,'Image Annotation for Patient #5',NULL,'RR2000-01-01_2013-04-17_006.jpg','2023-10-21 20:05:55'),(55,7,NULL,1,'Image Annotation for Patient #7',NULL,'RR2000-01-01_2013-04-17_007.jpg','2023-10-30 04:30:27'),(56,5,NULL,1,'Image Annotation for Patient #5',NULL,'SN2000-01-01_2013-04-17_001.jpg','2023-10-24 21:57:11');
/*!40000 ALTER TABLE `patientimages` ENABLE KEYS */;
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
INSERT INTO `producer` VALUES ('5b39334e-5034-4b6d-b3e3-0b09c5ca6e31');
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

-- Dump completed on 2023-12-09 14:47:00
