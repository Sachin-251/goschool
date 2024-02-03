-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2024 at 09:25 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `goschool_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `schools`
--

CREATE TABLE `schools` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(13) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isFeatured` varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `schools`
--

INSERT INTO `schools` (`id`, `name`, `address`, `city`, `state`, `email`, `phone`, `image`, `isFeatured`, `created_at`) VALUES
(2, 'Gayatri Public School', 'Shastripuram', 'Agra', 'Uttar Pradesh', 'gps@gmail.com', '7867564534', '1706905979161gps.jpg', NULL, '2024-02-02 15:02:59'),
(3, 'St Francis Convent School', 'Pashchimpuri', 'Agra', 'Uttar Pradesh', 'stfrancis@gmail.com', '9878675645', '1706906601060francis.jpg', NULL, '2024-02-02 15:13:21'),
(4, 'St Peters College', 'Church Road', 'Agra', 'Uttar Pradesh', 'stpeters@gmail.com', '6798456534', '1706907218479peters.jpg', NULL, '2024-02-02 15:23:38'),
(5, 'The Doon School', 'Mall Road, Dehradun, Uttarakhand', 'Dehradun', 'Uttarakhand', 'doonschool@gmail.com', '9283746510', '1706962998551doon.jpg', 'true', '2024-02-03 06:53:18'),
(6, 'La Martiniere for Boys', '11, Dr. U.N. Brahmachari Street, Loudon Street, Kolkata, West Bengal', 'Kolkata', 'West Bengal', 'martiniere@gmail.com', '9583746251', '1706963204548martiniere.jpg', NULL, '2024-02-03 06:56:44'),
(7, 'Mayo College', 'Srinagar Rd, Ajmer, Rajasthan', 'Ajmer', 'Rajasthan', 'mayo@gmail.com', '9021784365', '1706963424719Mayo.jpg', 'true', '2024-02-03 07:00:24'),
(8, 'Scindia School', 'The Fort, Gwalior, Madhya Pradesh', 'Gwalior', 'Madhya Pradesh', 'scinidia@gmail.com', '8129037654', '1706964744213scindia.jpg', NULL, '2024-02-03 07:22:24'),
(9, 'Dhirubhai Ambani International School', 'Bandra Kurla Complex, Bandra (East), Mumbai, Maharashtra', 'Mumbai', 'Maharashtra', 'ambani@gmail.com', '8077912365', '1706964941632ambani.jpg', 'true', '2024-02-03 07:25:41'),
(10, 'The Shri Ram School', 'V-37, Moulsari Avenue, Phase III, DLF City, Gurugram, Haryana', 'Gurugram', 'Haryana', 'ram@gmail.com', '8769654543', '1706965146388shriram.jpg', NULL, '2024-02-03 07:29:06'),
(11, 'Cathedral and John Connon School', '6 Purshottamdas Thakurdas Marg, Fort, Mumbai, Maharashtra', 'Mumbai', 'Maharashtra', 'johncannon@gmail.com', '7898676534', '1706991264400cathedral.jpeg', NULL, '2024-02-03 14:44:24'),
(12, 'Modern School', 'Barakhamba Road, New Delhi', 'Delhi', 'Delhi', 'modernschool@gmail.com', '9056872354', '1706991369735modern.jpg', NULL, '2024-02-03 14:46:09'),
(13, 'Vidya Niketan School', '4th Cross Rd, AECS Layout, Marathahalli, Bengaluru, Karnataka', 'Bangalore', 'Karnataka', 'vidyaniketan@gmail.com', '6954763421', '1706991591390vidyaniketan.jpg', NULL, '2024-02-03 14:49:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `schools`
--
ALTER TABLE `schools`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `schools`
--
ALTER TABLE `schools`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
