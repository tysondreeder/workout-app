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
-- Table structure for table `workouts_has_exercise`
--

DROP TABLE IF EXISTS `workouts_has_exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `workouts_has_exercise` (
  `workout_id` smallint(6) NOT NULL,
  `exercise_id` smallint(6) NOT NULL,
  `count_id` smallint(6) NOT NULL,
  `exercise_weight` varchar(45) NOT NULL,
  `day_id` smallint(6) NOT NULL,
  KEY `fk_workouts_has_exercise_exercise1_idx` (`exercise_id`),
  KEY `fk_workouts_has_exercise_workouts1_idx` (`workout_id`),
  KEY `fk_workouts_has_exercise_counts1_idx` (`count_id`),
  KEY `fk_workouts_has_exercise_days1_idx` (`day_id`),
  CONSTRAINT `fk_counts` FOREIGN KEY (`count_id`) REFERENCES `counts` (`count_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_exercise` FOREIGN KEY (`exercise_id`) REFERENCES `exercises` (`exercise_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_workouts` FOREIGN KEY (`workout_id`) REFERENCES `workouts` (`workout_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_workouts_has_exercise_days1` FOREIGN KEY (`day_id`) REFERENCES `days` (`day_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workouts_has_exercise`
--

LOCK TABLES `workouts_has_exercise` WRITE;
/*!40000 ALTER TABLE `workouts_has_exercise` DISABLE KEYS */;
INSERT INTO `workouts_has_exercise` VALUES (1,1,8,'{\"lb\": 135, \"kg\": 61.235}',2),(1,2,9,'{\"lb\": 45, \"kg\": 20.4117}',4),(1,3,10,'{\"lb\": 200, \"kg\": 90.7185}',6),(2,1,8,'{“lb\": 220, \"kg\": 99.790321}',2);
/*!40000 ALTER TABLE `workouts_has_exercise` ENABLE KEYS */;
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
