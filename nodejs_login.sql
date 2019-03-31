-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Dim 31 Mars 2019 à 04:29
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `nodejs_login`
--

-- --------------------------------------------------------

--
-- Structure de la table `absence`
--

CREATE TABLE IF NOT EXISTS `absence` (
  `id_absence` int(4) NOT NULL,
  `nom_abs` text NOT NULL,
  `prenom_abs` text NOT NULL,
  `cne_abs` text NOT NULL,
  `filliere_abs` text,
  `justification` text,
  PRIMARY KEY (`id_absence`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `absence`
--

INSERT INTO `absence` (`id_absence`, `nom_abs`, `prenom_abs`, `cne_abs`, `filliere_abs`, `justification`) VALUES
(1, 'ali', 'amd', 'dkjd', 'godt', 'oui');

-- --------------------------------------------------------

--
-- Structure de la table `absence_count`
--

CREATE TABLE IF NOT EXISTS `absence_count` (
  `id_abs` int(11) NOT NULL AUTO_INCREMENT,
  `id_etud` int(11) DEFAULT NULL,
  `ondate` date NOT NULL,
  `absence` int(11) DEFAULT '0',
  `timestate` int(11) DEFAULT '0',
  `justifier` int(11) DEFAULT '0',
  PRIMARY KEY (`id_abs`),
  KEY `dsd55` (`id_etud`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Contenu de la table `absence_count`
--

INSERT INTO `absence_count` (`id_abs`, `id_etud`, `ondate`, `absence`, `timestate`, `justifier`) VALUES
(10, 15, '2019-03-13', 1, 1, 0),
(11, 5, '2019-03-13', 1, 1, 0),
(13, 5, '2019-03-13', 1, 2, 0),
(19, 11, '2019-03-13', 0, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `departement`
--

CREATE TABLE IF NOT EXISTS `departement` (
  `id_dep` int(1) NOT NULL,
  `Nom_dep` text NOT NULL,
  PRIMARY KEY (`id_dep`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `departement`
--

INSERT INTO `departement` (`id_dep`, `Nom_dep`) VALUES
(1, 'Génie informatique'),
(2, 'energie renouvelable'),
(3, 'GODT'),
(4, 'TM');

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE IF NOT EXISTS `etudiant` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `nom` varchar(15) NOT NULL,
  `prenom` varchar(15) NOT NULL,
  `cne` varchar(15) NOT NULL,
  `filliere` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Contenu de la table `etudiant`
--

INSERT INTO `etudiant` (`id`, `nom`, `prenom`, `cne`, `filliere`) VALUES
(1, 'Amedioune', 'Ali', 'EE798102', 'GI1'),
(2, 'Amedioune', 'Ali', 'EE798102', 'Genie informatique'),
(3, 'dryouch', 'Marouane', 'ck', 'Tm'),
(4, 'dryouch', 'Marouane', 'ck', 'Tm'),
(5, 'dryouch', 'Marouane', 'EEkdk', 'GI2'),
(6, 'dryouch', 'Marouane', 'EEkdk', 'ccccc'),
(7, 'tawfiq', 'khnicha', 'ekd', 'GODT'),
(8, 'tawfiq', 'khnicha', 'ekd', 'GODT'),
(9, 'jdkj', 'okf', 'okezr', 'moksdf'),
(10, 'jdkj', 'okf', 'okezr', 'moksdf'),
(11, 'Boukhali', 'yassine', 'cne5555', 'GI2'),
(12, 'Boukhali', 'yassine', 'cne5555', 'GI2'),
(13, 'dalal', 'yassine', 'jkojkd', 'GI1'),
(14, 'dalal', 'yassine', 'jkojkd', 'GI1'),
(15, 'AGURRAM', 'MUStapha', 'ljez656', 'GI2'),
(16, 'AGURRAM', 'MUStapha', 'ljez656', 'GI2');

-- --------------------------------------------------------

--
-- Structure de la table `filiere`
--

CREATE TABLE IF NOT EXISTS `filiere` (
  `id_filiere` int(11) NOT NULL,
  `Nom_f` text NOT NULL,
  `dep_fk` int(1) NOT NULL,
  PRIMARY KEY (`id_filiere`),
  KEY `dep_fk` (`dep_fk`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `filiere`
--

INSERT INTO `filiere` (`id_filiere`, `Nom_f`, `dep_fk`) VALUES
(1, 'GI1', 1),
(2, 'GI2', 1),
(3, 'ISIL', 1),
(4, 'ER1', 2);

-- --------------------------------------------------------

--
-- Structure de la table `model`
--

CREATE TABLE IF NOT EXISTS `model` (
  `id_model` int(10) NOT NULL,
  `Nom_model` text NOT NULL,
  PRIMARY KEY (`id_model`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `time`
--

CREATE TABLE IF NOT EXISTS `time` (
  `id_time` int(1) NOT NULL,
  `heure` varchar(10) NOT NULL,
  PRIMARY KEY (`id_time`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` text,
  `last_name` text,
  `email` text,
  `password` text,
  `mobile` varchar(20) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=38 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `created`) VALUES
(25, 'ljk,', 'amd', 'akdd@hotmail.com', 'sqdqsdq', '0620994856', '2019-03-11 20:02:16'),
(26, 'ljk kl', 'amd', 'akdd@hotmail.com', 'sqdqsdq', '0620994856', '2019-03-11 20:02:20'),
(27, 'ljk kl', 'amd', 'akdd@hotmail.com', 'sqdqsdq', '0620994856', '2019-03-11 20:02:20'),
(28, 'mrfr', 'amd', 'test@gmail.com', 'test', '482525825', '2019-03-13 22:48:36'),
(29, 'mrfr', 'amd', 'lkjio@lib', '2752572', '0620994865', '2019-03-13 22:51:33'),
(30, 'mrfr', 'amd', 'lkjio@lib.com', '2752572', '0620994865', '2019-03-13 22:51:38'),
(31, 'mrfr', 'amd', 'lkjio@lib.com', '2752572', '0620994865', '2019-03-13 22:51:38'),
(32, 'test', 'amd', 'lkjio@lib.com', '2752572', '066666600', '2019-03-27 21:57:21'),
(33, 'test', 'amd', 'lkjio@lib.com', '2752572', '066666600', '2019-03-27 21:57:21'),
(34, 'ali amd', 'amd', 'casanova-ali@hotmail.com', 'ATR', '0620994856', '2019-03-28 22:35:20'),
(35, 'ali amd', 'amd', 'casanova-ali@hotmail.com', 'ATR', '0620994856', '2019-03-28 22:35:20'),
(36, 'brahim', 'amd', 'mamitoch@gmail.com', 'pass', '0620994865', '2019-03-29 20:43:41'),
(37, 'brahim', 'amd', 'mamitoch@gmail.com', 'pass', '0620994865', '2019-03-29 20:43:41');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `absence_count`
--
ALTER TABLE `absence_count`
  ADD CONSTRAINT `dsd55` FOREIGN KEY (`id_etud`) REFERENCES `etudiant` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
