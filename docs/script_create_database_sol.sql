-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Date: 01/02/2020 às 15:11
-- Version: 5.7.29-0ubuntu0.18.04.1
-- PHP: 7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

USE sol;
--
-- Database: `sol`
--
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `letter_color` varchar(7) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `color` varchar(7) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `class`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `class`
    MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

-- Fixed Data for `class_users`
INSERT INTO `class` (`id`, `name`, `letter_color`, `color`, `created_at`, `updated_at`) VALUES
(1, 'USERS', NULL, NULL, NULL, NULL),
(2, 'MEMBERS', NULL, NULL, NULL, NULL),
(3, 'LEADERS', NULL, NULL, NULL, NULL);

DROP TABLE IF EXISTS `languages`;
CREATE TABLE `languages` (
  `id` int(10) UNSIGNED NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `country` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `languages_description_unique` (`description`),
  ADD UNIQUE KEY `languages_country_unique` (`country`);

ALTER TABLE `languages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

INSERT INTO `languages` (`id`, `description`, `country`, `created_at`, `updated_at`) VALUES
(1, 'PORTUGUES', 'BRASIL', NULL, NULL),
(2, 'ENGLISH', 'UNITED STATES', NULL, NULL),
(3, 'SPANISH', 'AMERICA LATINA', NULL, NULL);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `class_id` int(10) UNSIGNED NOT NULL,
  `language_id` int(10) UNSIGNED NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `city` varchar(200) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `zipcode` varchar(30) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `bloodtype` varchar(20) DEFAULT NULL,
  `image` blob,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `users`
 ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

INSERT INTO `users` (`id`, `email`, `phone`, `class_id`, `language_id`, `firstname`, `address`, `city`, `state`, `zipcode`, `country`, `birth`, `bloodtype`, `image`, `created_at`, `updated_at`, `lastname`, `username`, `password`) VALUES
(1,'office@Makesignin.com','(936) 827-1460',1,1,'','','','','','','','','','','','','admin','admin');

DROP TABLE IF EXISTS `events`;
CREATE TABLE `events` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `image` longblob,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `events_id_user_foreign` (`id_user`);

ALTER TABLE `events`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT; 

