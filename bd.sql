-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 29, 2020 at 09:16 PM
-- Server version: 5.7.31-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.6

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sol`
--
CREATE DATABASE IF NOT EXISTS `cleanApp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `cleanApp`;

-- --------------------------------------------------------

--
-- Table structure for table `class`
--
-- Creation: Jul 29, 2020 at 06:24 AM
--

DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `letter_color` varchar(7) DEFAULT NULL,
  `color` varchar(7) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `class`:
--

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`id`, `name`, `letter_color`, `color`, `created_at`, `updated_at`) VALUES
(1, 'USERS', NULL, NULL, NULL, NULL),
(2, 'CLEANERS', NULL, NULL, NULL, NULL),
(3, 'CUSTOMERS', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--
-- Creation: Jul 29, 2020 at 06:24 AM
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE `events` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` longblob,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `events`:
--

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--
-- Creation: Jul 29, 2020 at 06:24 AM
--

DROP TABLE IF EXISTS `languages`;
CREATE TABLE `languages` (
  `id` int(10) UNSIGNED NOT NULL,
  `description` varchar(255) NOT NULL,
  `country` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `languages`:
--

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `description`, `country`, `created_at`, `updated_at`) VALUES
(1, 'PORTUGUES', 'BRASIL', NULL, NULL),
(2, 'ENGLISH', 'UNITED STATES', NULL, NULL),
(3, 'SPANISH', 'AMERICA LATINA', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--
-- Creation: Jul 29, 2020 at 06:24 AM
--

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
  `image` blob,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `users`:
--

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `class_id`, `language_id`, `username`, `email`, `phone`, `password`, `firstname`, `lastname`, `address`, `city`, `state`, `zipcode`, `country`, `birth`, `image`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'admin', 'emiliodami@gmail.com', '(936) 827-1460', 'admin', 'Emilio', 'Silva', '', '', '', '', NULL, '', '', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `events_id_user_foreign` (`id_user`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `languages_description_unique` (`description`),
  ADD UNIQUE KEY `languages_country_unique` (`country`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


--
-- Metadata
--
USE `phpmyadmin`;

--
-- Metadata for table class
--

--
-- Metadata for table events
--

--
-- Metadata for table languages
--

--
-- Metadata for table users
--

--
-- Metadata for database sol
--
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
