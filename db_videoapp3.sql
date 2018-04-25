-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 25, 2018 at 09:15 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_videoapp3`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_age_rating`
--

DROP TABLE IF EXISTS `tbl_age_rating`;
CREATE TABLE IF NOT EXISTS `tbl_age_rating` (
  `arating_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `arating_name` varchar(130) NOT NULL,
  `arating_desc` text NOT NULL,
  PRIMARY KEY (`arating_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_age_rating`
--

INSERT INTO `tbl_age_rating` (`arating_id`, `arating_name`, `arating_desc`) VALUES
(1, 'G', 'G - General Audiences for all ages'),
(2, 'PG', 'PG - Parental Guidance is suggested '),
(3, 'PG-13', 'PG-13 - Parents are strongly suggested and cautioned. Some material may seem offensive and inappropriate for some viewers.'),
(4, 'R', 'R - Restricted Content for ages 18 and under. Must be an adult or have a legal guardian present to view.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genre`
--

DROP TABLE IF EXISTS `tbl_genre`;
CREATE TABLE IF NOT EXISTS `tbl_genre` (
  `genre_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(130) NOT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_genre`
--

INSERT INTO `tbl_genre` (`genre_id`, `genre_name`) VALUES
(1, 'Action'),
(2, 'Adventure'),
(3, 'Comedy'),
(4, 'Crime'),
(5, 'Drama'),
(6, 'Horror'),
(7, 'History'),
(8, 'Science Fiction'),
(9, 'Animation'),
(10, 'Family'),
(11, 'Fantasy');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

DROP TABLE IF EXISTS `tbl_movies`;
CREATE TABLE IF NOT EXISTS `tbl_movies` (
  `movies_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `movies_title` varchar(130) NOT NULL,
  `movies_storyline` text NOT NULL,
  `movies_rating` mediumint(9) NOT NULL,
  `movies_trailer` varchar(85) NOT NULL,
  `movies_year` varchar(7) NOT NULL,
  `movies_cover` varchar(80) NOT NULL,
  PRIMARY KEY (`movies_id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`movies_id`, `movies_title`, `movies_storyline`, `movies_rating`, `movies_trailer`, `movies_year`, `movies_cover`) VALUES
(1, '2 Fast 2 Furious', 'This sequel focuses on ex-police officer Brian O\'Conner (Paul Walker), who relocates from Los Angeles to Miami to start over. Becoming involved in the street-racing scene in his new city, Brian befriends car-savvy Tej (Chris \"Ludacris\" Bridges) and Suki (Devon Aoki), but his competitive streak ends when federal agents apprehend him and he must enter into a deal with the FBI. Working with new partner Roman Pearce (Tyrese), Brian begins a dangerous mission to take down a powerful drug dealer.', 1, '2_fast_2_furios_.mp4', '2003', '2_fast_2_furious_poster.jpg'),
(2, 'Hidden Figures', 'The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.', 8, 'hidden_figures.mp4', '2016', 'hidden_figures_poster.jpg'),
(3, 'Grown Ups', 'The death of their childhood basketball coach leads to a reunion for some old friends (Adam Sandler, Kevin James, Chris Rock), who gather at the site of a championship celebration years earlier. Picking up where they left off, the buddies with wives and children discover why age does not, necessarily, equal maturity.', 4, 'grown_ups.mp4', '2010', 'grown_ups_poster.jpg'),
(4, 'Strangers Prey at Night', 'Mike and his wife Cindy take their son and daughter on a road trip that becomes their worst nightmare. The family members soon find themselves in a desperate fight for survival when they arrive at a secluded mobile home park that\'s mysteriously deserted -- until three masked psychopaths show up to satisfy their thirst for blood.', 3, 'strangers.mp4', '2018', 'strangers_prey_at_night_poster.jpg'),
(5, 'Wrinkle in Time', 'Meg Murry and her little brother, Charles Wallace, have been without their scientist father, Mr. Murry, for five years, ever since he discovered a new planet and used the concept known as a tesseract to travel there. Joined by Meg\'s classmate Calvin O\'Keefe and guided by the three mysterious astral travelers known as Mrs. Whatsit, Mrs. Who and Mrs. Which, the children brave a dangerous journey to a planet that possesses all of the evil in the universe.', 9, 'wrinkle_in_time.mp4', '2018', 'wrinkle_in_time_poster.jpg'),
(6, 'Finding Dory', 'Dory (Ellen DeGeneres) is a wide-eyed, blue tang fish who suffers from memory loss every 10 seconds or so. The one thing she can remember is that she somehow became separated from her parents as a child. With help from her friends Nemo and Marlin, Dory embarks on an epic adventure to find them. Her journey brings her to the Marine Life Institute, a conservatory that houses diverse ocean species. Dory now knows that her family reunion will only happen if she can save mom and dad from captivity.', 12, 'finding_dory.mp4', '2016', 'finding_dory_poster.jpg'),
(7, 'The Women', 'Clothing designer Mary Haines (Meg Ryan) appears to have it all a beautiful home in Connecticut, a successful husband, a lovely daughter, and the support of a close circle of friends led by magazine editor Sylvie Fowler (Annette Bening). When Mary learns her husband is cheating, her pals rally around her. But his infidelity does not compare to the betrayal Mary feels when Sylvie spills the beans about the affair to a gossip columnist she wants to hire for her magazine.', 5, 'the_women.mp4', '2008', 'the_women_poster.jpg'),
(8, 'Fifty Shades Freed - final movie', 'Believing they\'ve left behind the shadowy figures from the past, billionaire Christian Grey and his new wife, Anastasia, fully embrace their inextricable connection and shared life of luxury. Just as the Greys begin to step into their new roles, sinister events come to light and jeopardize their happy ending before it even begins.', 2, 'fifty_shades_freed.mp4', '2018', 'fifty_shades_freed_poster.jpg'),
(9, 'Annihilation', 'Based on Jeff VanderMeer’s best-selling Southern Reach Trilogy, Annihilation stars Natalie Portman, Jennifer Jason Leigh, Gina Rodriguez, Tessa Thompson, Tuva Novotny and Oscar Isaac. It was written and directed by Alex Garland (Ex Machina, 28 Days Later).', 14, 'annihilation.mp4', '2018', 'annihilation_poster.jpg'),
(10, 'Moana', 'An adventurous teenager sails out on a daring mission to save her people. During her journey, Moana meets the once-mighty demigod Maui, who guides her in her quest to become a master way-finder. Together they sail across the open ocean on an action-packed voyage, encountering enormous monsters and impossible odds. Along the way, Moana fulfills the ancient quest of her ancestors and discovers the one thing she always sought: her own identity.', 9, 'moana.mp4', '2016', 'moana_poster.jpg'),
(11, 'Spiderman', '\"Spiderman\" centers on student Peter Parker (Tobey Maguire) who, after being bitten by a genetically-altered spider, gains superhuman strength and the spider-like ability to cling to any surface. He vows to use his abilities to fight crime, coming to understand the words of his beloved Uncle Ben: \"With great power comes great responsibility.\"', 6, 'spider_man.mp4', '2002', 'spider_man_poster.jpg'),
(12, 'Deadpool', 'A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.', 7, 'deadpool.mp4', '2016', 'deadpool_poster.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov_ara`
--

DROP TABLE IF EXISTS `tbl_mov_ara`;
CREATE TABLE IF NOT EXISTS `tbl_mov_ara` (
  `mov_arating_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `movies_id` mediumint(9) NOT NULL,
  `arating_id` mediumint(9) NOT NULL,
  PRIMARY KEY (`mov_arating_id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_mov_ara`
--

INSERT INTO `tbl_mov_ara` (`mov_arating_id`, `movies_id`, `arating_id`) VALUES
(1, 1, 3),
(2, 2, 4),
(3, 3, 3),
(4, 4, 1),
(5, 5, 3),
(6, 6, 3),
(7, 7, 2),
(8, 8, 1),
(9, 9, 1),
(10, 10, 3),
(11, 11, 4),
(12, 12, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov_gen`
--

DROP TABLE IF EXISTS `tbl_mov_gen`;
CREATE TABLE IF NOT EXISTS `tbl_mov_gen` (
  `mov_genre_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `movies_id` mediumint(9) NOT NULL,
  `genre_id` mediumint(9) NOT NULL,
  PRIMARY KEY (`mov_genre_id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_mov_gen`
--

INSERT INTO `tbl_mov_gen` (`mov_genre_id`, `movies_id`, `genre_id`) VALUES
(1, 7, 2),
(2, 7, 5),
(3, 7, 9),
(4, 2, 1),
(5, 2, 2),
(6, 2, 3),
(7, 1, 1),
(8, 3, 5),
(9, 4, 12),
(10, 4, 3),
(11, 4, 13),
(12, 5, 3),
(13, 5, 2),
(14, 6, 5),
(15, 6, 6),
(16, 11, 5),
(17, 8, 12),
(18, 12, 7),
(19, 10, 14),
(20, 9, 9),
(21, 8, 13),
(22, 9, 13),
(23, 5, 13),
(24, 7, 13),
(25, 9, 14);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
