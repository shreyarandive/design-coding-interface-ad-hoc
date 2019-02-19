-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 19, 2019 at 09:12 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `uxpractice`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments_ashdesign`
--

CREATE TABLE `comments_ashdesign` (
  `db_comment_id` bigint(11) NOT NULL,
  `source_type` tinyint(4) NOT NULL,
  `source` varchar(255) NOT NULL,
  `post_id` varchar(25) NOT NULL,
  `parent_id` text NOT NULL,
  `comment_id` text NOT NULL,
  `comment_date` datetime NOT NULL,
  `author` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `meta` text NOT NULL,
  `is_deleted` int(1) NOT NULL,
  `relatedURL` text NOT NULL,
  `score` int(11) NOT NULL,
  `ups` int(11) NOT NULL,
  `downs` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `comments_ashdesign`
--

INSERT INTO `comments_ashdesign` (`db_comment_id`, `source_type`, `source`, `post_id`, `parent_id`, `comment_id`, `comment_date`, `author`, `message`, `meta`, `is_deleted`, `relatedURL`, `score`, `ups`, `downs`) VALUES
(12281, 1, 'assholedesign', 't3_5xak14', 't3_5xak14', 'deha8md', '2017-03-03 18:30:09', 'scotty3281', 'So, on one hand I think this is shitty because information like news should be free.  On the other hand people do need to be paid and server time is not cheap.\n\nI feel that these ads should be like Reddit ads - non-intrusive, no audio, no video, and no pop ups. But these are the reasons I use a pop up blocker. I do have some websites white listed like Reddit because the ads do not annoy me. ', '{\"kind\": \"t1\", \"score\": \"23\", \"likes\": \"\", \"ups\": \"23\", \"downs\": \"0\"}', 0, '', 23, 23, 0),
(12282, 1, 'assholedesign', 't3_5xak14', 't1_deha8md', 'dehcro1', '2017-03-03 19:30:28', 'vis-cera', 'Yeah, I definitely didn\'t mean it as an overall \"wanting money is bad\" thing, I think I mightve shown this the wrong way. My whole point was the fact that I feel like crime is a pretty important issue, and I\'d sort of.. expect something as important as that to be free.\n\nI don\'t mind disabling an adblocker or paying for information that I *dont* think is important, though. I mean, I\'m totally down to pay for gossip magazines or something if I really want that information.', '{\"kind\": \"t1\", \"score\": \"13\", \"likes\": \"\", \"ups\": \"13\", \"downs\": \"0\"}', 0, '', 13, 13, 0),
(12283, 1, 'assholedesign', 't3_5xak14', 't1_dehcro1', 'dehgqzi', '2017-03-03 21:11:40', '[deleted]', '[deleted]', '{\"kind\": \"t1\", \"score\": \"5\", \"likes\": \"\", \"ups\": \"5\", \"downs\": \"0\"}', 0, '', 5, 5, 0),
(12284, 1, 'assholedesign', 't3_5xak14', 't1_dehgqzi', 'dehkf3s', '2017-03-03 22:50:37', 'Munt_Custard', 'I mean, it\'s only the Gold Coast Bulletin ferfucksake.', '{\"kind\": \"t1\", \"score\": \"3\", \"likes\": \"\", \"ups\": \"3\", \"downs\": \"0\"}', 0, '', 3, 3, 0),
(12285, 1, 'assholedesign', 't3_5xak14', 't3_5xak14', 'dejri36', '2017-03-05 16:14:58', 'timberwolferlp', 'This and those annoying, uninformative auto playing videos that scroll with the page is why I don\'t even look at news sites anymore.\n\nOn the plus side, I hardly find myself bitching about politics.', '{\"kind\": \"t1\", \"score\": \"4\", \"likes\": \"\", \"ups\": \"4\", \"downs\": \"0\"}', 0, '', 4, 4, 0),
(12286, 1, 'assholedesign', 't3_5xak14', 't3_5xak14', 'degvzar', '2017-03-03 13:40:15', 'The_Thnikkaman', 'Sometimes content isn\'t free. Pay walls aren\'t really asshole design are they? ', '{\"kind\": \"t1\", \"score\": \"23\", \"likes\": \"\", \"ups\": \"23\", \"downs\": \"0\"}', 0, '', 23, 23, 0),
(12287, 1, 'assholedesign', 't3_5xak14', 't1_degvzar', 'deh4wo3', '2017-03-03 16:33:41', '[deleted]', 'It\'s a news website', '{\"kind\": \"t1\", \"score\": \"-2\", \"likes\": \"\", \"ups\": \"-2\", \"downs\": \"0\"}', 0, '', -2, -2, 0),
(12288, 1, 'assholedesign', 't3_5xak14', 't1_deh4wo3', 'deh5wvm', '2017-03-03 16:54:31', 'yugiohhero', 'Newspapers aren\'t free either', '{\"kind\": \"t1\", \"score\": \"12\", \"likes\": \"\", \"ups\": \"12\", \"downs\": \"0\"}', 0, '', 12, 12, 0),
(12289, 1, 'assholedesign', 't3_5xak14', 't1_deh4wo3', 'deh59n2', '2017-03-03 16:41:11', 'The_Thnikkaman', 'So? News isn\'t always free. Sometimes they have subscriptions. ', '{\"kind\": \"t1\", \"score\": \"11\", \"likes\": \"\", \"ups\": \"11\", \"downs\": \"0\"}', 0, '', 11, 11, 0),
(12290, 1, 'assholedesign', 't3_5xak14', 't1_deh59n2', 'deh984i', '2017-03-03 18:06:49', '[deleted]', 'News shouldn\'t have \"restrictions\" from being free though; It should either be that you pay to read your first article and subscribe, or browse as much articles as you want freely', '{\"kind\": \"t1\", \"score\": \"-4\", \"likes\": \"\", \"ups\": \"-4\", \"downs\": \"0\"}', 0, '', -4, -4, 0),
(12291, 1, 'assholedesign', 't3_5xak14', 't1_deh984i', 'deh9y5s', '2017-03-03 18:23:22', 'wloff', '...why?', '{\"kind\": \"t1\", \"score\": \"10\", \"likes\": \"\", \"ups\": \"10\", \"downs\": \"0\"}', 0, '', 10, 10, 0),
(12292, 1, 'assholedesign', 't3_5xak14', 't1_deh9y5s', 'deha10m', '2017-03-03 18:25:13', '[deleted]', 'Because we\'re on /r/assholedesign and anything is else is most likely asshole design', '{\"kind\": \"t1\", \"score\": \"2\", \"likes\": \"\", \"ups\": \"2\", \"downs\": \"0\"}', 0, '', 2, 2, 0),
(12293, 1, 'assholedesign', 't3_5xak14', 't1_deh4wo3', 'deh7qpz', '2017-03-03 17:34:00', 'eeronen', 'So...? Should journalists be volunteers? Or do you have some other magical way to pay for their salary?\n\n(pls don\'t say advertising, \'cause I\'m 99% sure you use adblock)', '{\"kind\": \"t1\", \"score\": \"10\", \"likes\": \"\", \"ups\": \"10\", \"downs\": \"0\"}', 0, '', 10, 10, 0),
(12294, 1, 'assholedesign', 't3_5xak14', 't3_5xak14', 'degpbh5', '2017-03-03 11:35:53', 'semtex94', 'I don\'t see a problem. Information isn\'t free.', '{\"kind\": \"t1\", \"score\": \"31\", \"likes\": \"\", \"ups\": \"31\", \"downs\": \"0\"}', 0, '', 31, 31, 0),
(12295, 1, 'assholedesign', 't3_5xak14', 't1_degpbh5', 'degrbuc', '2017-03-03 12:14:00', 'garryfoodwii', 'I think the idea is that other articles are free, so it\'s annoying that they would only put certain articles behind a paywall.', '{\"kind\": \"t1\", \"score\": \"34\", \"likes\": \"\", \"ups\": \"34\", \"downs\": \"0\"}', 0, '', 34, 34, 0),
(12296, 1, 'assholedesign', 't3_5xak14', 't1_degrbuc', 'degypa9', '2017-03-03 14:31:15', 'Hamster_Furtif', 'How about you pay for the articles they write ?  \nThat\'s what I don\'t get with posts on this sub:  \nThis website wants me to disable adbblock ? Asshole design !  \nThis website wants me to pay for some content ? Asshole design !   \n  \nThat\'s why we get some shitty sponsored content : people just wanted everything for free.', '{\"kind\": \"t1\", \"score\": \"24\", \"likes\": \"\", \"ups\": \"24\", \"downs\": \"0\"}', 0, '', 24, 24, 0),
(12297, 1, 'assholedesign', 't3_5xak14', 't1_degypa9', 'deh6v0p', '2017-03-03 17:14:49', 'Whatsanillinois', 'It\'s like saying that the people who own a convenient store are assholes because you had to pay for a bag of chips.', '{\"kind\": \"t1\", \"score\": \"5\", \"likes\": \"\", \"ups\": \"5\", \"downs\": \"0\"}', 0, '', 5, 5, 0),
(12298, 1, 'assholedesign', 't3_5xak14', 't1_degypa9', 'dehclyt', '2017-03-03 19:26:39', 'vis-cera', 'I\'m fine to disable adblock, I understand websites need to make their money somehow. However I think news - especially news I feel is crucial should be free. If they want to instate a pay-to-view news site, why not put it on entertainment/sport/lifestyle?', '{\"kind\": \"t1\", \"score\": \"0\", \"likes\": \"\", \"ups\": \"0\", \"downs\": \"0\"}', 0, '', 0, 0, 0),
(12299, 1, 'assholedesign', 't3_5xak14', 't1_dehclyt', 'dehf90q', '2017-03-03 20:33:14', 'Kulfyr3', 'Well you go to the victim and do an interview with him yourself if you think it\'s so crucial. Work is work, no matter how crucial.', '{\"kind\": \"t1\", \"score\": \"4\", \"likes\": \"\", \"ups\": \"4\", \"downs\": \"0\"}', 0, '', 4, 4, 0),
(12300, 1, 'assholedesign', 't3_5xak14', 't1_degrbuc', 'deh7y0h', '2017-03-03 17:38:27', 'eeronen', 'So that you get a sample of their articles. If you like it, fucking pay for it. If you don\'t like it, go to another website.', '{\"kind\": \"t1\", \"score\": \"5\", \"likes\": \"\", \"ups\": \"5\", \"downs\": \"0\"}', 0, '', 5, 5, 0),
(12301, 1, 'assholedesign', 't3_5xak14', 't1_degpbh5', 'degvpf9', '2017-03-03 13:35:10', '[deleted]', '[deleted]', '{\"kind\": \"t1\", \"score\": \"-4\", \"likes\": \"\", \"ups\": \"-4\", \"downs\": \"0\"}', 0, '', -4, -4, 0),
(12302, 1, 'assholedesign', 't3_5xak14', 't1_degvpf9', 'degwaoh', '2017-03-03 13:46:08', 'semtex94', 'Companies have to make money somehow.', '{\"kind\": \"t1\", \"score\": \"1\", \"likes\": \"\", \"ups\": \"1\", \"downs\": \"0\"}', 0, '', 1, 1, 0),
(12303, 1, 'assholedesign', 't3_5xak14', 't1_degwaoh', 'deh14n6', '2017-03-03 15:18:15', 'RelynSerano', 'adverts.', '{\"kind\": \"t1\", \"score\": \"6\", \"likes\": \"\", \"ups\": \"6\", \"downs\": \"0\"}', 0, '', 6, 6, 0),
(12304, 1, 'assholedesign', 't3_5xak14', 't1_deh14n6', 'deh1asc', '2017-03-03 15:21:40', 'semtex94', 'Then you hear people complaining about those and every response is to get an ad blocker.', '{\"kind\": \"t1\", \"score\": \"10\", \"likes\": \"\", \"ups\": \"10\", \"downs\": \"0\"}', 0, '', 10, 10, 0),
(12305, 1, 'assholedesign', 't3_5xak14', 't1_deh1asc', 'deh9sp9', '2017-03-03 18:19:54', 'scotty3281', 'If asshole web devs used static and not annoying ads then I wouldn\'t need ad blocker. I have a few white listed sites like Reddit because the ads are non-intrusive. \n\nPop ups, audio, and video are the reason I use ad blocker. ', '{\"kind\": \"t1\", \"score\": \"5\", \"likes\": \"\", \"ups\": \"5\", \"downs\": \"0\"}', 0, '', 5, 5, 0),
(12306, 1, 'assholedesign', 't3_5xak14', 't1_deh1asc', 'deh8w87', '2017-03-03 17:59:21', 'hemenex', 'Well it\'s kinda convenient. Most people don\'t care about ads / don\'t know adblock. The company still gets money, information is free and those who don\'t want to see ads don\'t.', '{\"kind\": \"t1\", \"score\": \"3\", \"likes\": \"\", \"ups\": \"3\", \"downs\": \"0\"}', 0, '', 3, 3, 0),
(12307, 1, 'assholedesign', 't3_5xak14', 't1_deh8w87', 'deh9dpc', '2017-03-03 18:10:25', 'semtex94', 'But at what point do too many people use ad blockers? There\'s a tipping point.', '{\"kind\": \"t1\", \"score\": \"2\", \"likes\": \"\", \"ups\": \"2\", \"downs\": \"0\"}', 0, '', 2, 2, 0),
(12308, 1, 'assholedesign', 't3_5xak14', 't1_deh8w87', 'deha10g', '2017-03-03 18:25:13', 'wloff', 'You\'re just assuming that news sites can automatically get enough revenue to sustain themselves just by slapping some ads on their page. That is just not at all true.', '{\"kind\": \"t1\", \"score\": \"1\", \"likes\": \"\", \"ups\": \"1\", \"downs\": \"0\"}', 0, '', 1, 1, 0),
(12309, 1, 'assholedesign', 't3_5xak14', 't3_5xak14', 'dehq0hz', '2017-03-04 01:46:44', 'danielunited', 'This is the result of people using Adblock.', '{\"kind\": \"t1\", \"score\": \"3\", \"likes\": \"\", \"ups\": \"3\", \"downs\": \"0\"}', 0, '', 3, 3, 0),
(12310, 1, 'assholedesign', 't3_5xak14', 't3_5xak14', 'deh6vtr', '2017-03-03 17:15:20', 'hiddenthrowawayy', 'I recognize your username from somewhere. I think I might know you.', '{\"kind\": \"t1\", \"score\": \"1\", \"likes\": \"\", \"ups\": \"1\", \"downs\": \"0\"}', 0, '', 1, 1, 0),
(12311, 1, 'assholedesign', 't3_5xak14', 't3_5xak14', 'dehmiw5', '2017-03-03 23:51:09', 'IrrationalBees', 'Fuck yeah Gold Coast cunt ', '{\"kind\": \"t1\", \"score\": \"1\", \"likes\": \"\", \"ups\": \"1\", \"downs\": \"0\"}', 0, '', 1, 1, 0),
(33939, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'duk4mhh', '2018-02-20 15:00:03', 'NameOfaFeller', 'I bet they’d be angry if they found those in the offering plate at their church. ', '{\"kind\": \"t1\", \"score\": \"183\", \"likes\": \"\", \"ups\": \"183\", \"downs\": \"0\"}', 0, '', 183, 183, 0),
(33940, 1, 'assholedesign', 't3_7yyxmj', 't1_duk4mhh', 'duk4nkm', '2018-02-20 15:00:31', 'darkslasher87', 'Exactly what my first thought was', '{\"kind\": \"t1\", \"score\": \"97\", \"likes\": \"\", \"ups\": \"97\", \"downs\": \"0\"}', 0, '', 97, 97, 0),
(33941, 1, 'assholedesign', 't3_7yyxmj', 't1_duk4nkm', 'dukf0d1', '2018-02-20 17:38:21', 'dannydale', 'Fucking do it.', '{\"kind\": \"t1\", \"score\": \"78\", \"likes\": \"\", \"ups\": \"78\", \"downs\": \"0\"}', 0, '', 78, 78, 0),
(33942, 1, 'assholedesign', 't3_7yyxmj', 't1_dukf0d1', 'dul3v8d', '2018-02-21 01:40:30', 'huw_2_redit', 'yes do it and report back results', '{\"kind\": \"t1\", \"score\": \"20\", \"likes\": \"\", \"ups\": \"20\", \"downs\": \"0\"}', 0, '', 20, 20, 0),
(33943, 1, 'assholedesign', 't3_7yyxmj', 't1_dul3v8d', 'dulyd68', '2018-02-21 13:40:16', 'trollman_falcon', 'Please do it I’ll give you free karma', '{\"kind\": \"t1\", \"score\": \"9\", \"likes\": \"\", \"ups\": \"9\", \"downs\": \"0\"}', 0, '', 9, 9, 0),
(33944, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'dukhuf6', '2018-02-20 18:27:18', 'Introvertedotter', 'I have never understood why people think this particular approach will reach anyone, ever. All it ever does is piss people off and make secular or on the fence people hate religious people all the more. If you are trying to win hearts and souls maybe try not to get their hopes up only to immediately crush them and make them feel stupid. Just shows a complete lack of understanding in psychology. The worst are people who leave these things as “tips” to servers. I wish bad things on people who do that to people just trying to get by. ', '{\"kind\": \"t1\", \"score\": \"91\", \"likes\": \"\", \"ups\": \"91\", \"downs\": \"0\"}', 0, '', 91, 91, 0),
(33945, 1, 'assholedesign', 't3_7yyxmj', 't1_dukhuf6', 'dukm9e2', '2018-02-20 19:43:37', 'maggiesura', 'I served tables for a few years ago, and this is the first thing that came to my mind.\n\n', '{\"kind\": \"t1\", \"score\": \"25\", \"likes\": \"\", \"ups\": \"25\", \"downs\": \"0\"}', 0, '', 25, 25, 0),
(33946, 1, 'assholedesign', 't3_7yyxmj', 't1_dukm9e2', 'dukx2o4', '2018-02-20 23:03:14', 'darbinatorwow', 'Happy cake day - three years :)', '{\"kind\": \"t1\", \"score\": \"7\", \"likes\": \"\", \"ups\": \"7\", \"downs\": \"0\"}', 0, '', 7, 7, 0),
(33947, 1, 'assholedesign', 't3_7yyxmj', 't1_dukhuf6', 'dulpzf2', '2018-02-21 11:34:15', 'sexlineblingg', 'What if these are actually made by atheists to make people hate the jesus people? ', '{\"kind\": \"t1\", \"score\": \"4\", \"likes\": \"\", \"ups\": \"4\", \"downs\": \"0\"}', 0, '', 4, 4, 0),
(33948, 1, 'assholedesign', 't3_7yyxmj', 't1_dulpzf2', 'dumcqzn', '2018-02-21 17:17:18', 'Introvertedotter', 'Always a possibility but I have legitimately seen “nice christians” stiff servers including myself back in the day by leaving these crappy little FU’s in stead of a real tip. So even if it started as advanced trolling, some “real” religious people latched on to it. ', '{\"kind\": \"t1\", \"score\": \"2\", \"likes\": \"\", \"ups\": \"2\", \"downs\": \"0\"}', 0, '', 2, 2, 0),
(33949, 1, 'assholedesign', 't3_7yyxmj', 't1_dumcqzn', 'dumctlw', '2018-02-21 17:18:30', 'sexlineblingg', 'r/woosh', '{\"kind\": \"t1\", \"score\": \"1\", \"likes\": \"\", \"ups\": \"1\", \"downs\": \"0\"}', 0, '', 1, 1, 0),
(33950, 1, 'assholedesign', 't3_7yyxmj', 't1_dukhuf6', 'dumppmo', '2018-02-21 21:06:53', 'TenSnakesAndACat', 'seriously, who thinks this will gt anyone to believe in god or something? oh some asshole left a fake 20. ya this will *totally* make me believe in god. i think advertising for things like religion, political parties, etc is pointless. because by the time you will care it is going to be a core belief. i don\'t believe in god, and i don\'t think a random sign that says Jesus is the way will change that. nor the other way around. ', '{\"kind\": \"t1\", \"score\": \"1\", \"likes\": \"\", \"ups\": \"1\", \"downs\": \"0\"}', 0, '', 1, 1, 0),
(33951, 1, 'assholedesign', 't3_7yyxmj', 't1_dukhuf6', 'dumvbp8', '2018-02-21 22:54:13', 'AGoodIntentionedFool', 'Yeah if I had any religious cringe left, I\'d cringe the fuck out over the times I stopped my mother from doing this. I think the last time though that server got an extra 10$ because I was like \'Jesus Christ what the fuck!\' He spoke to me and was like \"Yeah 10 dollar tip on a 120 dollar check? If a man asks for your coat give him your cloak also, amiright?\" Jesus is a pretty cool bro in my head.', '{\"kind\": \"t1\", \"score\": \"1\", \"likes\": \"\", \"ups\": \"1\", \"downs\": \"0\"}', 0, '', 1, 1, 0),
(33952, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'dum5b8p', '2018-02-21 15:25:27', 'SpoopyTheGreat', 'Once I found a small bright pink folded piece of paper on the ground. It was a note trying to recruit me into becoming a Jehovah\'s Witness, but there was actually a penny glued inside. That was a decade ago yet I still rember it vividly. THAT is how it\'s supposed to be done. Free money=people remember you.  ', '{\"kind\": \"t1\", \"score\": \"12\", \"likes\": \"\", \"ups\": \"12\", \"downs\": \"0\"}', 0, '', 12, 12, 0),
(33953, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'dukle2p', '2018-02-20 19:27:52', 'NotJarrod', 'Hope Jesus can pay my mortgage', '{\"kind\": \"t1\", \"score\": \"5\", \"likes\": \"\", \"ups\": \"5\", \"downs\": \"0\"}', 0, '', 5, 5, 0),
(33954, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'duk9s7f', '2018-02-20 16:17:03', '[deleted]', 'report for loitering ', '{\"kind\": \"t1\", \"score\": \"13\", \"likes\": \"\", \"ups\": \"13\", \"downs\": \"0\"}', 0, '', 13, 13, 0),
(33955, 1, 'assholedesign', 't3_7yyxmj', 't1_duk9s7f', 'duko25e', '2018-02-20 20:16:19', 'OMG__Ponies', '&gt; report for loitering\n\n*littering', '{\"kind\": \"t1\", \"score\": \"23\", \"likes\": \"\", \"ups\": \"23\", \"downs\": \"0\"}', 0, '', 23, 23, 0),
(33956, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'dukjwdq', '2018-02-20 19:01:53', 'M1k01sH3r3', 'That\'s just sad, the amount of desperation you can see in this approach lol.', '{\"kind\": \"t1\", \"score\": \"4\", \"likes\": \"\", \"ups\": \"4\", \"downs\": \"0\"}', 0, '', 4, 4, 0),
(33957, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'dulpnir', '2018-02-21 11:29:14', 'STINKR_13', 'I\'ve seen these with $20 bills. Made my day then I opened it then got pissed. Is that a sin?', '{\"kind\": \"t1\", \"score\": \"4\", \"likes\": \"\", \"ups\": \"4\", \"downs\": \"0\"}', 0, '', 4, 4, 0),
(33958, 1, 'assholedesign', 't3_7yyxmj', 't1_dulpnir', 'dult87p', '2018-02-21 12:23:16', 'chaoticidealism', 'No, printing these is a sin though.', '{\"kind\": \"t1\", \"score\": \"5\", \"likes\": \"\", \"ups\": \"5\", \"downs\": \"0\"}', 0, '', 5, 5, 0),
(33959, 1, 'assholedesign', 't3_7yyxmj', 't1_dulpnir', 'dulqweq', '2018-02-21 11:47:57', 'darkslasher87', 'I would be more surprised if someone didn\'t get pissed at this', '{\"kind\": \"t1\", \"score\": \"3\", \"likes\": \"\", \"ups\": \"3\", \"downs\": \"0\"}', 0, '', 3, 3, 0),
(33960, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'dukdms3', '2018-02-20 17:15:50', 'jimbarnett22', 'They don’t even use those £20 notes that’s not fooling anyone', '{\"kind\": \"t1\", \"score\": \"3\", \"likes\": \"\", \"ups\": \"3\", \"downs\": \"0\"}', 0, '', 3, 3, 0),
(33961, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'dukx9h2', '2018-02-20 23:07:00', 'GeneralLoofah', 'Well I’m glad this isn’t just something that happens in the states... wait I’m not glad at all. It’s an asshole move. ', '{\"kind\": \"t1\", \"score\": \"3\", \"likes\": \"\", \"ups\": \"3\", \"downs\": \"0\"}', 0, '', 3, 3, 0),
(33962, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'duk4m5a', '2018-02-20 14:59:54', 'MrTimSearle', 'You were fooled brother!\nDon’t be!', '{\"kind\": \"t1\", \"score\": \"4\", \"likes\": \"\", \"ups\": \"4\", \"downs\": \"0\"}', 0, '', 4, 4, 0),
(33963, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'dukk94s', '2018-02-20 19:07:30', 'redtailedhawk06', 'Those notes have been out of circulation for years... ', '{\"kind\": \"t1\", \"score\": \"2\", \"likes\": \"\", \"ups\": \"2\", \"downs\": \"0\"}', 0, '', 2, 2, 0),
(33964, 1, 'assholedesign', 't3_7yyxmj', 't1_dukk94s', 'dukx4et', '2018-02-20 23:04:12', 'darbinatorwow', 'Looking forward to the new ones in 2020?', '{\"kind\": \"t1\", \"score\": \"2\", \"likes\": \"\", \"ups\": \"2\", \"downs\": \"0\"}', 0, '', 2, 2, 0),
(33965, 1, 'assholedesign', 't3_7yyxmj', 't1_dukx4et', 'dumj1xe', '2018-02-21 19:04:26', 'katiehanna_', 'Why did they change the £20s to then remake the £5s and 10s in a different material a few years later.\nBy the way I hate the new notes, I work in a pub and they stick together and somehow slide there way in to the back parts of the tills, drives me fucking insane lol', '{\"kind\": \"t1\", \"score\": \"1\", \"likes\": \"\", \"ups\": \"1\", \"downs\": \"0\"}', 0, '', 1, 1, 0),
(33966, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'dukw1en', '2018-02-20 22:43:09', 'florentinefish', 'Let’s climb the secular fence.', '{\"kind\": \"t1\", \"score\": \"1\", \"likes\": \"\", \"ups\": \"1\", \"downs\": \"0\"}', 0, '', 1, 1, 0),
(33967, 1, 'assholedesign', 't3_7yyxmj', 't3_7yyxmj', 'duljkk6', '2018-02-21 09:50:03', 'DrDiarrhea', 'Fucking JW\'s do this shit all the time. ', '{\"kind\": \"t1\", \"score\": \"1\", \"likes\": \"\", \"ups\": \"1\", \"downs\": \"0\"}', 0, '', 1, 1, 0),
(83405, 1, 'assholedesign', 't3_7cpf6u', 't3_7cpf6u', 'dprtrxo', '2017-11-13 16:23:37', 'Shortyman17', 'How to make someone dislike your services 101', '{\"kind\": \"t1\", \"score\": \"204\", \"likes\": \"\", \"ups\": \"204\", \"downs\": \"0\"}', 0, '', 204, 204, 0),
(83406, 1, 'assholedesign', 't3_7cpf6u', 't3_7cpf6u', 'dpryxs7', '2017-11-13 17:46:56', 'Tuckertcs', 'is that even legal?', '{\"kind\": \"t1\", \"score\": \"114\", \"likes\": \"\", \"ups\": \"114\", \"downs\": \"0\"}', 0, '', 114, 114, 0),
(83407, 1, 'assholedesign', 't3_7cpf6u', 't1_dpryxs7', 'dps0c2r', '2017-11-13 18:11:43', 'Cash_and_also_Money', 'I would imagine, seems like there would be a few less random spam emails if it was', '{\"kind\": \"t1\", \"score\": \"41\", \"likes\": \"\", \"ups\": \"41\", \"downs\": \"0\"}', 0, '', 41, 41, 0),
(83408, 1, 'assholedesign', 't3_7cpf6u', 't1_dpryxs7', 'dpseab1', '2017-11-13 22:27:03', '_Mr-Skeltal_', 'Click [here](https://www.google.com/search?q=is+this+legal) for an answer to your question.\n\n &amp;nbsp;     \n &amp;nbsp; ? ^(Also automatically send OP Reddit Gold)\n\nEDIT: Thank you for the gold... that was unexpected, as I know those cheap ploys don\'t work.', '{\"kind\": \"t1\", \"score\": \"75\", \"likes\": \"\", \"ups\": \"75\", \"downs\": \"0\"}', 0, '', 75, 75, 0),
(83409, 1, 'assholedesign', 't3_7cpf6u', 't1_dpseab1', 'dpshgaf', '2017-11-13 23:29:27', 'Qarewyr', 'Bad human', '{\"kind\": \"t1\", \"score\": \"27\", \"likes\": \"\", \"ups\": \"27\", \"downs\": \"0\"}', 0, '', 27, 27, 0),
(83410, 1, 'assholedesign', 't3_7cpf6u', 't1_dpseab1', 'dpsih3p', '2017-11-13 23:52:41', 'jackinson_', 'Damn, you got me.', '{\"kind\": \"t1\", \"score\": \"12\", \"likes\": \"\", \"ups\": \"12\", \"downs\": \"0\"}', 0, '', 12, 12, 0),
(83411, 1, 'assholedesign', 't3_7cpf6u', 't1_dpseab1', 'dpthngi', '2017-11-14 14:21:40', 'Roccobot', 'It worked almost as expected', '{\"kind\": \"t1\", \"score\": \"5\", \"likes\": \"\", \"ups\": \"5\", \"downs\": \"0\"}', 0, '', 5, 5, 0),
(83412, 1, 'assholedesign', 't3_7cpf6u', 't1_dpryxs7', 'dpslamd', '2017-11-14 01:07:13', 'Clawtooth', 'Not in Canada', '{\"kind\": \"t1\", \"score\": \"5\", \"likes\": \"\", \"ups\": \"5\", \"downs\": \"0\"}', 0, '', 5, 5, 0),
(83413, 1, 'assholedesign', 't3_7cpf6u', 't1_dpryxs7', 'dps1j05', '2017-11-13 18:33:20', 'TheAwesomeMutant', 'not for long', '{\"kind\": \"t1\", \"score\": \"3\", \"likes\": \"\", \"ups\": \"3\", \"downs\": \"0\"}', 0, '', 3, 3, 0),
(83414, 1, 'assholedesign', 't3_7cpf6u', 't3_7cpf6u', 'dps39yu', '2017-11-13 19:05:22', 'gypsy-magic', 'Wow. At least in Canada our laws don’t even allow businesses to “pre-check” those opt-ins at all to begin with. ', '{\"kind\": \"t1\", \"score\": \"47\", \"likes\": \"\", \"ups\": \"47\", \"downs\": \"0\"}', 0, '', 47, 47, 0),
(83415, 1, 'assholedesign', 't3_7cpf6u', 't1_dps39yu', 'dpwmdd7', '2017-11-16 08:16:37', 'trollxic', 'EU too.. also a double opt-in is required (email confirmation on behalf of the user, like clicking a confirmation link). ', '{\"kind\": \"t1\", \"score\": \"3\", \"likes\": \"\", \"ups\": \"3\", \"downs\": \"0\"}', 0, '', 3, 3, 0),
(83416, 1, 'assholedesign', 't3_7cpf6u', 't3_7cpf6u', 'dprp9nd', '2017-11-13 15:12:56', 'Rampilow', 'Lol sick ', '{\"kind\": \"t1\", \"score\": \"40\", \"likes\": \"\", \"ups\": \"40\", \"downs\": \"0\"}', 0, '', 40, 40, 0),
(83417, 1, 'assholedesign', 't3_7cpf6u', 't3_7cpf6u', 'dpsoa8h', '2017-11-14 02:48:16', 'WMpartisan', 'After the cruise, set up an email filter to forward their spam to their CEO and put it in your spam folder.', '{\"kind\": \"t1\", \"score\": \"14\", \"likes\": \"\", \"ups\": \"14\", \"downs\": \"0\"}', 0, '', 14, 14, 0),
(83418, 1, 'assholedesign', 't3_7cpf6u', 't1_dpsoa8h', 'dpw9j6m', '2017-11-16 00:31:35', 'gridzbispudvetch', 'Not forward, just redirect', '{\"kind\": \"t1\", \"score\": \"3\", \"likes\": \"\", \"ups\": \"3\", \"downs\": \"0\"}', 0, '', 3, 3, 0),
(83419, 1, 'assholedesign', 't3_7cpf6u', 't3_7cpf6u', 'dpsaoi1', '2017-11-13 21:23:13', '-Nano', 'F12 (DevTools), change the checkbox to disabled state (or just remove it) and click send. ', '{\"kind\": \"t1\", \"score\": \"18\", \"likes\": \"\", \"ups\": \"18\", \"downs\": \"0\"}', 0, '', 18, 18, 0),
(83420, 1, 'assholedesign', 't3_7cpf6u', 't1_dpsaoi1', 'dpscsc5', '2017-11-13 22:00:00', 'nsellek', 'If it\'s JavaScript that\'s rechecking it then I will still happen even if the check box is disabled. JavaScript chacned the state of it not actually clicks it', '{\"kind\": \"t1\", \"score\": \"23\", \"likes\": \"\", \"ups\": \"23\", \"downs\": \"0\"}', 0, '', 23, 23, 0),
(83421, 1, 'assholedesign', 't3_7cpf6u', 't1_dpscsc5', 'dpsovzs', '2017-11-14 03:11:50', 'VampDuc', 'Not necessarily. While, yes, the box will be checked, disabled fields are often ignored by the processor.', '{\"kind\": \"t1\", \"score\": \"-5\", \"likes\": \"\", \"ups\": \"-5\", \"downs\": \"0\"}', 0, '', -5, -5, 0),
(83422, 1, 'assholedesign', 't3_7cpf6u', 't1_dpsovzs', 'dpssf7t', '2017-11-14 05:48:10', 'nsellek', 'I know that\'s not the case with a Ruby on Rails app. I\'m a Ruby Dev and I disable fields all the time to keep users from changing them andhavw JS change the value of them.', '{\"kind\": \"t1\", \"score\": \"3\", \"likes\": \"\", \"ups\": \"3\", \"downs\": \"0\"}', 0, '', 3, 3, 0),
(83423, 1, 'assholedesign', 't3_7cpf6u', 't1_dpssf7t', 'dpt1xdx', '2017-11-14 10:09:33', 'VampDuc', 'Weird. Do you remove the disabled attribute before submission?\n\nDisabled fields aren\'t supposed to submit. Read only fields are for submitting data unchageable by the user.', '{\"kind\": \"t1\", \"score\": \"2\", \"likes\": \"\", \"ups\": \"2\", \"downs\": \"0\"}', 0, '', 2, 2, 0),
(83424, 1, 'assholedesign', 't3_7cpf6u', 't1_dpssf7t', 'dpt825k', '2017-11-14 11:51:03', 'bbbbbenji', 'What does Ruby have to do with it?', '{\"kind\": \"t1\", \"score\": \"1\", \"likes\": \"\", \"ups\": \"1\", \"downs\": \"0\"}', 0, '', 1, 1, 0),
(83425, 1, 'assholedesign', 't3_7cpf6u', 't3_7cpf6u', 'dpse4q6', '2017-11-13 22:24:20', '_Mr-Skeltal_', 'This would be even better if it named the shitty cruise company, so they could start acquiring a dodgy reputation.', '{\"kind\": \"t1\", \"score\": \"12\", \"likes\": \"\", \"ups\": \"12\", \"downs\": \"0\"}', 0, '', 12, 12, 0),
(83426, 1, 'assholedesign', 't3_7cpf6u', 't1_dpse4q6', 'dpsij6r', '2017-11-13 23:54:04', '[deleted]', 'It does...', '{\"kind\": \"t1\", \"score\": \"13\", \"likes\": \"\", \"ups\": \"13\", \"downs\": \"0\"}', 0, '', 13, 13, 0),
(83427, 1, 'assholedesign', 't3_7cpf6u', 't3_7cpf6u', 'dpuqg5x', '2017-11-15 07:23:14', 'Cheetawolf', 'I\'m fairly certain that\'s illegal.', '{\"kind\": \"t1\", \"score\": \"3\", \"likes\": \"\", \"ups\": \"3\", \"downs\": \"0\"}', 0, '', 3, 3, 0),
(83428, 1, 'assholedesign', 't3_7cpf6u', 't3_7cpf6u', 'dpt5k92', '2017-11-14 11:11:24', 'Cagoak', 'Ever company does that, don’t they?', '{\"kind\": \"t1\", \"score\": \"0\", \"likes\": \"\", \"ups\": \"0\", \"downs\": \"0\"}', 0, '', 0, 0, 0),
(83429, 1, 'assholedesign', 't3_7cpf6u', 't1_dpt5k92', 'dptg4n1', '2017-11-14 13:57:23', 'Roccobot', 'I\'m not sure, anyway they could avoid to show a visual hint of their trick', '{\"kind\": \"t1\", \"score\": \"1\", \"likes\": \"\", \"ups\": \"1\", \"downs\": \"0\"}', 0, '', 1, 1, 0),
(83430, 1, 'assholedesign', 't3_7cpf6u', 't3_7cpf6u', 'dps3by9', '2017-11-13 19:06:24', 'felixplague', 'So do 90% of these shitty sign ups', '{\"kind\": \"t1\", \"score\": \"-16\", \"likes\": \"\", \"ups\": \"-16\", \"downs\": \"0\"}', 0, '', -16, -16, 0),
(83431, 1, 'assholedesign', 't3_7cpf6u', 't1_dps3by9', 'dpsik9b', '2017-11-13 23:54:45', '[deleted]', 'Please share an example. It shouldn\'t take you long.', '{\"kind\": \"t1\", \"score\": \"12\", \"likes\": \"\", \"ups\": \"12\", \"downs\": \"0\"}', 0, '', 12, 12, 0),
(83432, 1, 'assholedesign', 't3_7cpf6u', 't1_dpsik9b', 'dpso14v', '2017-11-14 02:38:27', 'felixplague', 'I shall not. You have the resources I\'m sure.', '{\"kind\": \"t1\", \"score\": \"-13\", \"likes\": \"\", \"ups\": \"-13\", \"downs\": \"0\"}', 0, '', -13, -13, 0),
(83433, 1, 'assholedesign', 't3_7cpf6u', 't1_dps3by9', 'dpslh5x', '2017-11-14 01:12:34', 'usskawaii', 'And that makes it not asshole design because...?', '{\"kind\": \"t1\", \"score\": \"11\", \"likes\": \"\", \"ups\": \"11\", \"downs\": \"0\"}', 0, '', 11, 11, 0),
(83434, 1, 'assholedesign', 't3_7cpf6u', 't1_dpslh5x', 'dpsmcxy', '2017-11-14 01:39:53', 'felixplague', 'BECAUSE I HATE THE SIGHT OF THEM OKAY.! Phew. Alright I\'m ok now. ', '{\"kind\": \"t1\", \"score\": \"-7\", \"likes\": \"\", \"ups\": \"-7\", \"downs\": \"0\"}', 0, '', -7, -7, 0),
(83435, 1, 'assholedesign', 't3_7cpf6u', 't1_dpsmcxy', 'dpsw91e', '2017-11-14 08:07:27', 'cloverleafed', 'those last three comments beg to differ', '{\"kind\": \"t1\", \"score\": \"5\", \"likes\": \"\", \"ups\": \"5\", \"downs\": \"0\"}', 0, '', 5, 5, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments_ashdesign`
--
ALTER TABLE `comments_ashdesign`
  ADD PRIMARY KEY (`db_comment_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments_ashdesign`
--
ALTER TABLE `comments_ashdesign`
  MODIFY `db_comment_id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83436;