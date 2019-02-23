SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "-05:00";

CREATE TABLE `coding_ashdesign` (
  `db_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `post_id` varchar(20) NOT NULL,
  `comment_id` varchar(20) NOT NULL,
  `phatic` int(11) DEFAULT NULL,
  `issues_concern` int(11) DEFAULT NULL,
  `issues_concern_virtue_ethics` int(11) DEFAULT NULL,
  `issues_concern_consequentialist_ethics` int(11) DEFAULT NULL,
  `issues_concern_deontological_ethics` int(11) DEFAULT NULL,
  `proposed_remedy` int(11) DEFAULT NULL,
  `proposed_remedy_types_legal` int(11) DEFAULT NULL,
  `proposed_remedy_types_shame` int(11) DEFAULT NULL,
  `proposed_remedy_types_hack` int(11) DEFAULT NULL,
  `proposed_remedy_directed_to_individual` int(11) DEFAULT NULL,
  `proposed_remedy_directed_to_society` int(11) DEFAULT NULL,
  `modifiers` int(11) DEFAULT NULL,
  `modifiers_extends` int(11) DEFAULT NULL,
  `modifiers_example` int(11) DEFAULT NULL,
  `modifiers_conditional` int(11) DEFAULT NULL,
  `modifiers_disagree_counter` int(11) DEFAULT NULL,
  `modifiers_futuring` int(11) DEFAULT NULL,
  `sub_level_conversational_shift` int(11) DEFAULT NULL,
  `code_notes` text,
  `status` int(11) DEFAULT NULL,
  `comment_timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`db_id`),UNIQUE(`comment_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;