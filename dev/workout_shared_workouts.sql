CREATE DATABASE  IF NOT EXISTS `workout` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `workout`;
-- MySQL dump 10.13  Distrib 5.6.13, for osx10.6 (i386)
--
-- Host: localhost    Database: workout
-- ------------------------------------------------------
-- Server version	5.5.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `shared_workouts`
--

DROP TABLE IF EXISTS `shared_workouts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shared_workouts` (
  `workout_id` smallint(6) NOT NULL,
  `share_id` smallint(6) NOT NULL,
  `synced` bit(1) DEFAULT b'0',
  KEY `fk_users_has_workouts_workouts1_idx` (`workout_id`),
  KEY `fk_shared_workouts_connections1_idx` (`share_id`),
  CONSTRAINT `fk_shared_workouts_connections1` FOREIGN KEY (`share_id`) REFERENCES `connections` (`share_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_users_has_workouts_workouts1` FOREIGN KEY (`workout_id`) REFERENCES `workouts` (`workout_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shared_workouts`
--

LOCK TABLES `shared_workouts` WRITE;
/*!40000 ALTER TABLE `shared_workouts` DISABLE KEYS */;
INSERT INTO `shared_workouts` VALUES (1,1,''),(1,2,'\0'),(1,3,''),(1,3,''),(1,3,'\0');
/*!40000 ALTER TABLE `shared_workouts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-07 11:06:05
