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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-07 11:06:05
