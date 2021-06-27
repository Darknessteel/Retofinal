-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_internacional_sebastian
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `sebastian_tbl_app_cailificaciones`
--

DROP TABLE IF EXISTS `sebastian_tbl_app_cailificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sebastian_tbl_app_cailificaciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cometario` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `estrellas` int NOT NULL,
  `usuario` varchar(255) COLLATE utf8_bin NOT NULL,
  `huesped` varchar(255) COLLATE utf8_bin NOT NULL,
  `cometariop` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sebastian_tbl_app_cailificaciones`
--

LOCK TABLES `sebastian_tbl_app_cailificaciones` WRITE;
/*!40000 ALTER TABLE `sebastian_tbl_app_cailificaciones` DISABLE KEYS */;
INSERT INTO `sebastian_tbl_app_cailificaciones` VALUES (5,'ready ',8,'rafodelmal','marianall','listo'),(6,'todo correcto',10,'rafodelmal','llano','ese man la patada'),(7,'ldjbfkrsbfvdskjv',5,'rafodelmal','llano','a'),(8,'a',5,'rafodelmal','marianall','ultima prueba'),(9,'q',5,'rafodelmal','marianall',''),(10,'muy bien',10,'rafodelmal','marianall','muy bien'),(11,'melo caramelo',10,'alejo','marianall','muy bien');
/*!40000 ALTER TABLE `sebastian_tbl_app_cailificaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sebastian_tbl_app_houses`
--

DROP TABLE IF EXISTS `sebastian_tbl_app_houses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sebastian_tbl_app_houses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `direccion` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `disponibilidad` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `pais` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `propietario` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `valor` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sebastian_tbl_app_houses`
--

LOCK TABLES `sebastian_tbl_app_houses` WRITE;
/*!40000 ALTER TABLE `sebastian_tbl_app_houses` DISABLE KEYS */;
INSERT INTO `sebastian_tbl_app_houses` VALUES (1,'Medellin','calle','0','colombia','rafodelmal','3007166045','100.000'),(2,'Medellin','itagu','1','colombia','alejo','3007166045','50.000'),(3,'pereira','per','1','colombia','llano','3006591137','80.000');
/*!40000 ALTER TABLE `sebastian_tbl_app_houses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sebastian_tbl_app_reservas`
--

DROP TABLE IF EXISTS `sebastian_tbl_app_reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sebastian_tbl_app_reservas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `alfitrion` varchar(255) COLLATE utf8_bin NOT NULL,
  `ciudad` varchar(255) COLLATE utf8_bin NOT NULL,
  `estado` varchar(255) COLLATE utf8_bin NOT NULL,
  `huesped` varchar(255) COLLATE utf8_bin NOT NULL,
  `pais` varchar(255) COLLATE utf8_bin NOT NULL,
  `dial` int NOT NULL,
  `mesl` int DEFAULT NULL,
  `aniol` int DEFAULT NULL,
  `dias` int DEFAULT NULL,
  `mess` int DEFAULT NULL,
  `anios` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sebastian_tbl_app_reservas`
--

LOCK TABLES `sebastian_tbl_app_reservas` WRITE;
/*!40000 ALTER TABLE `sebastian_tbl_app_reservas` DISABLE KEYS */;
INSERT INTO `sebastian_tbl_app_reservas` VALUES (2,'rafodelmal','Medellin','1','marianall','colombia',19,6,2021,29,6,2021);
/*!40000 ALTER TABLE `sebastian_tbl_app_reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sebastian_tbl_app_users`
--

DROP TABLE IF EXISTS `sebastian_tbl_app_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sebastian_tbl_app_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `direccion` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `pais` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `rol` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sebastian_tbl_app_users`
--

LOCK TABLES `sebastian_tbl_app_users` WRITE;
/*!40000 ALTER TABLE `sebastian_tbl_app_users` DISABLE KEYS */;
INSERT INTO `sebastian_tbl_app_users` VALUES (1,'Bogota','los mayamis','Mariana del carmen ','Usa','123','Usuario','marianall'),(2,'Medellin','calle 6 sur # 79-150','rafo del socorro','colombia','123','Usuario-Casa','rafodelmal'),(3,'Medellin','CALLE 6  SUR # 79   150 remanso del rodeo apto 1411','Juan Sebastian Llano','colombia','123','Usuario','sebas'),(4,'Medellin','itagui','alejandro montoya ','colombia','123','Usuario-Casa','alejo'),(5,'Medellin','CALLE 6  SUR # 79   150 remanso del rodeo apto 1411','balmore llano cano','colombia','123','Usuario-Casa','llano');
/*!40000 ALTER TABLE `sebastian_tbl_app_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-20 15:45:46
