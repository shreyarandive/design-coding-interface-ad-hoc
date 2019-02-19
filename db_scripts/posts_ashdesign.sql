-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 19, 2019 at 09:10 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `uxpractice`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts_ashdesign`
--

CREATE TABLE `posts_ashdesign` (
  `db_id` bigint(20) NOT NULL,
  `source_type` tinyint(1) NOT NULL,
  `source` varchar(255) NOT NULL,
  `permalink` text,
  `post_id` text NOT NULL,
  `post_date` datetime NOT NULL,
  `author` varchar(255) NOT NULL,
  `title` text NOT NULL,
  `message` text,
  `meta` text,
  `relatedURL` text NOT NULL,
  `post_hint` varchar(10) NOT NULL,
  `score` int(11) NOT NULL,
  `num_comments` int(11) NOT NULL,
  `ups` int(11) NOT NULL,
  `downs` int(11) NOT NULL,
  `lastupdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `random` double NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts_ashdesign`
--

INSERT INTO `posts_ashdesign` (`db_id`, `source_type`, `source`, `permalink`, `post_id`, `post_date`, `author`, `title`, `message`, `meta`, `relatedURL`, `post_hint`, `score`, `num_comments`, `ups`, `downs`, `lastupdated`, `random`) VALUES
(1294, 1, 'assholedesign', '/r/assholedesign/comments/5xak14/trying_to_browse_the_news/', 't3_5xak14', '2017-03-03 09:17:11', 'vis-cera', 'Trying to browse the news', '', '{\"kind\": \"t3\", \"score\": \"264\", \"num_comments\": \"30\", \"likes\": \"\", \"ups\": \"264\", \"downs\": \"0\", \"thumbnail\": \"https://b.thumbs.redditmedia.com/K9wj7SkTz2k63nJFUOYlKNuWjOdiUitsfFdBrqTK6pY.jpg\", \"url\": \"https://i.imgur.com/8qOfusV.png\", \"post_hint\": \"image\"}', 'https://i.imgur.com/8qOfusV.png', 'image', 265, 29, 265, 0, '2018-10-21 01:40:45', 0.48275693644094925),
(2522, 1, 'assholedesign', '/r/assholedesign/comments/7yyxmj/some_guy_was_walking_around_my_local_park/', 't3_7yyxmj', '2018-02-20 14:57:47', 'darkslasher87', 'Some guy was walking around my local park throwing these on the ground...', '', '{\"kind\": \"t3\", \"score\": \"422\", \"num_comments\": \"30\", \"likes\": \"\", \"ups\": \"422\", \"downs\": \"0\", \"thumbnail\": \"https://b.thumbs.redditmedia.com/6uC0s33B92RRnndmfsLUZqmuRMNa43QjEay7deApmBg.jpg\", \"url\": \"https://i.redd.it/4oc48y87bfh01.png\", \"post_hint\": \"image\"}', 'https://i.redd.it/4oc48y87bfh01.png', 'image', 436, 29, 436, 0, '2018-10-21 01:40:45', 0.5187156950297912),
(3555, 1, 'assholedesign', '/r/assholedesign/comments/7cpf6u/this_cruise_company_form_autoenables_the_yes_send/', 't3_7cpf6u', '2017-11-13 14:10:24', 'Roccobot', 'This cruise company form auto-enables the \'yes, send me spam\' checkbox when you click \'Submit\'', '', '{\"kind\": \"t3\", \"score\": \"1004\", \"num_comments\": \"31\", \"likes\": \"\", \"ups\": \"1004\", \"downs\": \"0\", \"thumbnail\": \"https://a.thumbs.redditmedia.com/HAlRHxEOPxGKIMAzqJ1f0CqmKIYqyOafHyNNhD6Z4X4.jpg\", \"url\": \"https://i.imgur.com/yfBoUBH.gifv\", \"post_hint\": \"link\"}', 'https://i.imgur.com/yfBoUBH.gifv', 'link', 1009, 31, 1009, 0, '2018-10-21 02:20:22', 0.9762733950990005);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts_ashdesign`
--
ALTER TABLE `posts_ashdesign`
  ADD PRIMARY KEY (`db_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts_ashdesign`
--
ALTER TABLE `posts_ashdesign`
  MODIFY `db_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3556;