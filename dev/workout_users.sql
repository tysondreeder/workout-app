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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(45) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `user_password` varchar(45) NOT NULL,
  `user_height` varchar(45) DEFAULT NULL,
  `user_weight` varchar(45) DEFAULT NULL,
  `user_bmi` smallint(6) DEFAULT NULL,
  `user_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'mike@mbautista.com','Mike Bautista','peanut12','{\"feet\": 5, \"inches\": 11}','0',30,'2015-08-02 15:18:27'),(2,'mike@mbautista.com','Mike Bautista','peanut12','{\"feet\": 5, \"inches\": 11}','{\"lb\": 215, \"kg\": 97.52236}',30,'2015-08-02 15:22:00'),(3,'ted@tederoni.com','Ted Testeroni','TedistheBest','{\"feet\": 6, \"inches\": 2, \"cm\": 187.96}','{\"lb\": 215, \"kg\": 97.52236}',15,'2015-08-12 03:57:43'),(4,'mike@mbuaitsta.com','Mike','peanut','{\"feet\": 5, \"inches\": 11}','{\"lb\": 215, \"kg\": 97.52236}',30,'2015-08-28 04:48:15'),(5,'mike@mbuaitsta.com','Mike','peanut','{\"feet\": 5, \"inches\": 11}','{\"lb\": 215, \"kg\": 97.52236}',30,'2015-08-28 05:06:39'),(6,'mike@mbuaitsa.com','Mike','peanut','{\"feet\": 5, \"inches\": 11}','{\"lb\": 215, \"kg\": 97.52236}',30,'2015-08-28 05:12:34'),(7,'mike@mbuaitsa.com','Mike','peanut',NULL,'{\"lb\": 215, \"kg\": 97.52236}',30,'2015-08-28 05:26:13'),(8,'mike@mbuaitsa.com','Mike','peanut','{\"feet\": 5, \"inches\": 11}','{\"lb\": 215, \"kg\": 97.52236}',30,'2015-08-28 05:27:11'),(10,'mike@mbuaitsa.com','Mike','peanut','{\"feet\": 5, \"inches\": 11}','{\"lb\": 215, \"kg\": 97.52236}',30,'2015-08-29 02:19:30'),(11,'mike@mbautista.com','','',NULL,NULL,NULL,'2015-08-30 01:42:07'),(12,'mike@mbautista.com','','',NULL,NULL,NULL,'2015-08-30 01:43:56'),(13,'mike@mbautista.com','','',NULL,NULL,NULL,'2015-08-30 02:31:03'),(14,'mike@mbautista.com','','',NULL,NULL,NULL,'2015-08-30 02:31:46'),(15,'mike@mbautista.com','Mike Bautista','peanut12','{\"feet\": 5, \"inches\": 11}','{\"lb\": 215, \"kg\": 97.52236}',30,'2015-08-30 02:46:32'),(16,'mike@mbautista.com','Mike Bautista','peanut12','{\"feet\": 5, \"inches\": 11}','{\"lb\": 215, \"kg\": 97.52236}',30,'2015-08-30 02:48:16');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
