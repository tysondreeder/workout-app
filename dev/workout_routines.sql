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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-07 11:06:05
