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
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `config` (
  `config_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `user_id` smallint(6) NOT NULL,
  `weight_type` varchar(2) NOT NULL DEFAULT 'lb',
  `language` varchar(45) NOT NULL DEFAULT 'English',
  `start_of_week` varchar(45) NOT NULL DEFAULT 'Monday',
  PRIMARY KEY (`config_id`),
  KEY `fk_config_users2_idx` (`user_id`),
  CONSTRAINT `fk_config_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config`
--

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` VALUES (1,1,'lb','english','Sunday'),(2,5,'lb','english','Monday'),(3,4,'lb','english','Sunday');
/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `connections`
--

DROP TABLE IF EXISTS `connections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `connections` (
  `share_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `user_id` smallint(6) NOT NULL,
  `connection_id` smallint(6) NOT NULL,
  PRIMARY KEY (`share_id`),
  KEY `fk_user_id` (`user_id`),
  KEY `fk_connection_id` (`connection_id`),
  CONSTRAINT `fk_connection_id` FOREIGN KEY (`connection_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `connections`
--

LOCK TABLES `connections` WRITE;
/*!40000 ALTER TABLE `connections` DISABLE KEYS */;
INSERT INTO `connections` VALUES (1,1,2),(2,1,3),(3,5,2);
/*!40000 ALTER TABLE `connections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `counts`
--

DROP TABLE IF EXISTS `counts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `counts` (
  `count_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `count` varchar(45) NOT NULL,
  PRIMARY KEY (`count_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `counts`
--

LOCK TABLES `counts` WRITE;
/*!40000 ALTER TABLE `counts` DISABLE KEYS */;
INSERT INTO `counts` VALUES (8,'{\"set\": 5, \"repetitions\": 5}'),(9,'{\"set\": 3, \"repetitions\": 15}'),(10,'{\"set\": 3, \"repetitions\": [10, 8, 6, 4]}'),(11,'{\"set\": 3, \"repetitions\": 10}');
/*!40000 ALTER TABLE `counts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `days`
--

DROP TABLE IF EXISTS `days`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `days` (
  `day_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `day_name` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`day_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `days`
--

LOCK TABLES `days` WRITE;
/*!40000 ALTER TABLE `days` DISABLE KEYS */;
INSERT INTO `days` VALUES (1,'Sunday'),(2,'Monday'),(3,'Tuesday'),(4,'Wednesday'),(5,'Thursday'),(6,'Friday'),(7,'Saturday');
/*!40000 ALTER TABLE `days` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercises`
--

DROP TABLE IF EXISTS `exercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exercises` (
  `exercise_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `exercise_name` varchar(45) NOT NULL,
  `exercise_example` blob NOT NULL,
  PRIMARY KEY (`exercise_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercises`
--

LOCK TABLES `exercises` WRITE;
/*!40000 ALTER TABLE `exercises` DISABLE KEYS */;
INSERT INTO `exercises` VALUES (1,'Barbell Bench Press','<div class=\"BBCOMVideoEmbed\" data-video-key=\"12e57ed29dba92abb169\" data-autoplay=\"false\" data-thumbnail-url=\"http://videos.bodybuilding.com/preview/54000/2_54651.jpg\"><script type=\"text/javascript\" sr'),(2,'Barbell Shoulder Press','<div class=\"BBCOMVideoEmbed\" data-video-key=\"27c649d36916147b9c5b\" data-autoplay=\"false\" data-thumbnail-url=\"http://videos.bodybuilding.com/preview/54000/2_54711.jpg\"><script type=\"text/javascript\" sr'),(3,'Barbell Squat','<div class=\"BBCOMVideoEmbed\" data-video-key=\"849bbac315c81661b082\" data-autoplay=\"false\" data-thumbnail-url=\"http://videos.bodybuilding.com/preview/24000/2_25821.jpg\"><script type=\"text/javascript\" sr'),(4,'Barbell Bench Press','<div class=\"BBCOMVideoEmbed\" data-video-key=\"12e57ed29dba92abb169\" data-autoplay=\"false\" data-thumbnail-url=\"http://videos.bodybuilding.com/preview/54000/2_54651.jpg\"><script type=\"text/javascript\" src=\"http://assets.bodybuilding.com/videos/javascript/min/external-video-embed.js\"></script></div>'),(5,'Barbell Shoulder Press','<div class=\"BBCOMVideoEmbed\" data-video-key=\"27c649d36916147b9c5b\" data-autoplay=\"false\" data-thumbnail-url=\"http://videos.bodybuilding.com/preview/54000/2_54711.jpg\"><script type=\"text/javascript\" src=\"http://assets.bodybuilding.com/videos/javascript/min/external-video-embed.js\"></script></div>'),(6,'Barbell Squat','<div class=\"BBCOMVideoEmbed\" data-video-key=\"849bbac315c81661b082\" data-autoplay=\"false\" data-thumbnail-url=\"http://videos.bodybuilding.com/preview/24000/2_25821.jpg\"><script type=\"text/javascript\" src=\"http://assets.bodybuilding.com/videos/javascript/min/external-video-embed.js\"></script></div>'),(7,'Barbell Shoulder Press','<div class=\"BBCOMVideoEmbed\" data-video-key=\"12e57ed29dba92abb169\" data-autoplay=\"false\" data-thumbnail-url=\"http://videos.bodybuilding.com/preview/54000/2_54651.jpg\"><script type=\"text/javascript\" src=\"http://assets.bodybuilding.com/videos/javascript/min/external-video-embed.js\"></script></div>');
/*!40000 ALTER TABLE `exercises` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Temporary table structure for view `shared_workouts_v`
--

DROP TABLE IF EXISTS `shared_workouts_v`;
/*!50001 DROP VIEW IF EXISTS `shared_workouts_v`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `shared_workouts_v` (
  `connection_id` tinyint NOT NULL,
  `user_id` tinyint NOT NULL,
  `workout_id` tinyint NOT NULL,
  `synced` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

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

--
-- Temporary table structure for view `users_v`
--

DROP TABLE IF EXISTS `users_v`;
/*!50001 DROP VIEW IF EXISTS `users_v`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `users_v` (
  `user_id` tinyint NOT NULL,
  `user_email` tinyint NOT NULL,
  `user_name` tinyint NOT NULL,
  `user_password` tinyint NOT NULL,
  `user_height` tinyint NOT NULL,
  `user_weight` tinyint NOT NULL,
  `user_bmi` tinyint NOT NULL,
  `user_created` tinyint NOT NULL,
  `weight_type` tinyint NOT NULL,
  `language` tinyint NOT NULL,
  `start_of_week` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `weights`
--

DROP TABLE IF EXISTS `weights`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weights` (
  `weight_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `lb` float NOT NULL,
  `kg` float NOT NULL,
  PRIMARY KEY (`weight_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weights`
--

LOCK TABLES `weights` WRITE;
/*!40000 ALTER TABLE `weights` DISABLE KEYS */;
INSERT INTO `weights` VALUES (1,45,20.4117),(2,35,15.8757),(3,25,11.3398),(4,10,4.53592),(5,5,2.26796),(6,2.5,1.13398),(7,65,29.4835);
/*!40000 ALTER TABLE `weights` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workouts`
--

DROP TABLE IF EXISTS `workouts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `workouts` (
  `workout_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `user_id` smallint(6) NOT NULL,
  `workout_name` varchar(45) NOT NULL,
  `workout_days` varchar(200) NOT NULL,
  PRIMARY KEY (`workout_id`),
  KEY `fk_workouts_users1_idx` (`user_id`),
  CONSTRAINT `fk_workouts_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workouts`
--

LOCK TABLES `workouts` WRITE;
/*!40000 ALTER TABLE `workouts` DISABLE KEYS */;
INSERT INTO `workouts` VALUES (1,2,'Workout 1','{\"days\": [\"Monday\", \"Wednesday\", \"Friday\"]}'),(2,5,'Power Workout 5','{“days\": [\"Monday\", \"Wednesday\", \"Friday\"]}');
/*!40000 ALTER TABLE `workouts` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Temporary table structure for view `workouts_v`
--

DROP TABLE IF EXISTS `workouts_v`;
/*!50001 DROP VIEW IF EXISTS `workouts_v`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `workouts_v` (
  `workout_id` tinyint NOT NULL,
  `workout_name` tinyint NOT NULL,
  `workout_days` tinyint NOT NULL,
  `count` tinyint NOT NULL,
  `exercise_id` tinyint NOT NULL,
  `exercise_name` tinyint NOT NULL,
  `exercise_weight` tinyint NOT NULL,
  `day_name` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `shared_workouts_v`
--

/*!50001 DROP TABLE IF EXISTS `shared_workouts_v`*/;
/*!50001 DROP VIEW IF EXISTS `shared_workouts_v`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `shared_workouts_v` AS select `connections`.`connection_id` AS `connection_id`,`connections`.`user_id` AS `user_id`,`shared_workouts`.`workout_id` AS `workout_id`,`shared_workouts`.`synced` AS `synced` from (`shared_workouts` join `connections`) where (`shared_workouts`.`share_id` = `connections`.`share_id`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `users_v`
--

/*!50001 DROP TABLE IF EXISTS `users_v`*/;
/*!50001 DROP VIEW IF EXISTS `users_v`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `users_v` AS select `users`.`user_id` AS `user_id`,`users`.`user_email` AS `user_email`,`users`.`user_name` AS `user_name`,`users`.`user_password` AS `user_password`,`users`.`user_height` AS `user_height`,`users`.`user_weight` AS `user_weight`,`users`.`user_bmi` AS `user_bmi`,`users`.`user_created` AS `user_created`,`config`.`weight_type` AS `weight_type`,`config`.`language` AS `language`,`config`.`start_of_week` AS `start_of_week` from (`users` join `config`) where (`users`.`user_id` = `config`.`user_id`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `workouts_v`
--

/*!50001 DROP TABLE IF EXISTS `workouts_v`*/;
/*!50001 DROP VIEW IF EXISTS `workouts_v`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `workouts_v` AS select `workouts`.`workout_id` AS `workout_id`,`workouts`.`workout_name` AS `workout_name`,`workouts`.`workout_days` AS `workout_days`,`counts`.`count` AS `count`,`exercises`.`exercise_id` AS `exercise_id`,`exercises`.`exercise_name` AS `exercise_name`,`workouts_has_exercise`.`exercise_weight` AS `exercise_weight`,`days`.`day_name` AS `day_name` from ((((`workouts` join `workouts_has_exercise`) join `counts`) join `exercises`) join `days`) where ((`workouts_has_exercise`.`workout_id` = `workouts`.`workout_id`) and (`workouts_has_exercise`.`count_id` = `counts`.`count_id`) and (`workouts_has_exercise`.`exercise_id` = `exercises`.`exercise_id`) and (`workouts_has_exercise`.`day_id` = `days`.`day_id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-07 11:07:45
