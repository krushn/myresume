DROP TABLE IF EXISTS `achievements`;
CREATE TABLE IF NOT EXISTS `achievements` (
  `achievement_id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text NOT NULL,
  `sort_order` int(100) NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`achievement_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

INSERT INTO `achievements` (`achievement_id`, `description`, `sort_order`, `status`) VALUES
(3, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 39, 1),
(4, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 2, 1),
(5, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 0, 1),
(6, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 0, 1),
(7, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 0, 1),
(9, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 0, 1);

DROP TABLE IF EXISTS `education`;
CREATE TABLE IF NOT EXISTS `education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `institute` varchar(250) NOT NULL,
  `degree` varchar(250) NOT NULL,
  `passout_year` int(4) NOT NULL,
  `result` varchar(250) NOT NULL,
  `sort_order` int(100) NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

INSERT INTO `education` (`id`, `institute`, `degree`, `passout_year`, `result`, `sort_order`, `status`) VALUES
(1, 'J k Bharad', 'BE in Computer', 2014, '5.6/10 CGPA', 0, 1),
(2, 'Convent High School', 'HSC', 2010, '95%', 0, 1),
(3, 'Convent High School', 'SSC', 2009, '89%', 0, 1),
(4, 'St. Xavius, Bombay', 'Primary Education', 2008, '', 0, 1);

DROP TABLE IF EXISTS `experience`;
CREATE TABLE IF NOT EXISTS `experience` (
  `experience_id` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(250) NOT NULL,
  `date_from` date NOT NULL,
  `date_to` date NOT NULL,
  `position` varchar(250) NOT NULL,
  `responsibility` text NOT NULL,
  `sort_order` int(100) NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`experience_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

INSERT INTO `experience` (`experience_id`, `company`, `date_from`, `date_to`, `position`, `responsibility`, `sort_order`, `status`) VALUES
(1, 'Google', '2015-04-06', '2015-12-01', 'PHP Web Developer', 'Database architecture,  System optimize,\n Coding, Designing', 0, 1),
(2, 'Microsoft', '2015-04-06', '2015-12-01', 'Sharepoint Developer', 'Database architecture, System optimize, Coding, Designing', 0, 1),
(3, 'Microsoft', '2015-04-06', '2015-12-01', 'Android Developer', 'Coding, UI Developing', 0, 1),
(4, 'Google', '2015-04-06', '2015-12-01', 'PHP Web Developer', 'Database architecture,  System optimize,\r\n Coding, Designing', 0, 1),
(6, 'sdfd', '0000-00-00', '0000-00-00', 'sdfds', 'sdsd', 0, 1),
(7, 'rewsr', '0000-00-00', '0000-00-00', 'sdfds', 'sdsd', 0, 1);

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `message` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

INSERT INTO `messages` (`message_id`, `name`, `email`, `message`, `timestamp`) VALUES
(1, 'dsfsd', 'demo@localhost.com', 'sdfsdfs', '2015-12-13 06:48:44'),
(2, 'dsfsd', 'demo@localhost.com', 'sdfsdfs', '2015-12-13 06:49:01'),
(3, 'dsfsd', 'demo@localhost.com', 'sdfsdfs', '2015-12-13 06:49:03'),
(4, 'dfgdgf', 'demo@localhost.com', 'dfgdfg', '2015-12-13 06:50:37'),
(5, 'werwe', 'demo@localhost.com', 'rgrgt', '2015-12-13 06:52:14'),
(6, 'asdasd', 'demo@localhost.com', 'asdasd', '2015-12-13 06:57:18'),
(7, 'asdasd', 'demo@localhost.com', 'asdasd', '2015-12-13 06:57:20'),
(8, 'asdasd', 'demo@localhost.com', 'asdasd', '2015-12-13 06:57:20'),
(9, 'dfs', 'demo@localhost.com', 'dfsd', '2015-12-13 06:59:44'),
(10, 'sdfsd', 'demo@localhost.com', 'sfdfs', '2015-12-13 07:00:12'),
(11, 'sdfds', 'demo@localhost.com', 'sdfsdf', '2015-12-13 07:00:47'),
(12, 'dsfsd', 'demo@localhost.com', 'efrwerwe', '2015-12-13 07:01:13'),
(13, 'asdasd', 'demo@localhost.com', 'rtetre', '2015-12-13 07:03:27'),
(14, 'sdf', 'demo@localhost.com', 'dfsdf', '2015-12-13 07:03:38');

DROP TABLE IF EXISTS `portfolio`;
CREATE TABLE IF NOT EXISTS `portfolio` (
  `image_id` int(250) NOT NULL AUTO_INCREMENT,
  `image` varchar(250) NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `sort_order` int(100) NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

INSERT INTO `portfolio` (`image_id`, `image`, `title`, `description`, `sort_order`, `status`) VALUES
(1, '01.jpg', 'Lorem Ipsum ', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 0, 1),
(2, '02.jpg', 'Lorem Ipsum 2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 0, 1),
(3, '03.jpg', 'Lorem Ipsum 3', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 0, 1),
(4, '05.jpg', 'Lorem Ipsum 4', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 0, 1),
(5, '06.jpg', 'Lorem Ipsum 5', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 0, 1),
(6, '08.jpg', 'Lorem Ipsum 6', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 0, 1),
(7, '09.jpg', 'Lorem Ipsum 7', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 0, 1),
(8, '10.jpg', 'Lorem Ipsum 8', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 0, 1),
(9, '11.jpg', 'Item #2', 'Item #1 description', 6, 1),
(11, '12.jpg', 'Item #1', 'Item #1 description', 6, 1);

DROP TABLE IF EXISTS `projects`;
CREATE TABLE IF NOT EXISTS `projects` (
  `project_id` int(11) NOT NULL AUTO_INCREMENT,
  `duration_month` int(11) NOT NULL,
  `duration_year` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `url` varchar(250) NOT NULL,
  `skill_used` text NOT NULL,
  `sort_order` int(100) NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

INSERT INTO `projects` (`project_id`, `duration_month`, `duration_year`, `title`, `description`, `url`, `skill_used`, `sort_order`, `status`) VALUES
(1, 5, 2, 'Jwelery', 'The signature user interface font of Metro UI CSS, Segoe, Open Sans and PT Serif Caption. It''s a sans serif design drawn in the tradition of signage and way-finding typefaces. For non-windows system used Open Sans fonts, loaded from google fonts. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'http://google.com', 'PHP, HTML5, CSS3, jQuery, Angular, Codeigniter', 0, 1),
(2, 5, 2, 'Wine gallery', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'http://google.com', 'PHP, HTML5, CSS3, jQuery, Angular, Codeigniter', 0, 1),
(3, 5, 2, 'eCommerce Hub', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'http://google.com', 'PHP, HTML5, CSS3, jQuery, Angular, Codeigniter', 0, 1),
(4, 5, 2, 'Black Box', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'http://google.com', 'PHP, HTML5, CSS3, jQuery, Angular, Codeigniter', 0, 1),
(6, 3, 3, 'test', 'tetsetse', 'erwe', 'erwerw', 0, 1),
(7, 3, 3, 'test', 'tetsetse', 'erwe', 'erwerw', 0, 1),
(8, 3, 3, 'test', 'tetsetse', 'erwe', 'erwerw', 0, 1);

DROP TABLE IF EXISTS `settings`;
CREATE TABLE IF NOT EXISTS `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

INSERT INTO `settings` (`id`, `name`, `value`) VALUES
(1, 'mobile', '+ 91 46985 87655'),
(2, 'telephone', '0275 67577'),
(3, 'address', '754, Zibra complex,\r\nBoston\r\nUs - 458956'),
(4, 'map_image', 'map1.png'),
(5, 'map_url', 'https://www.google.co.in/maps?q=google+boston&oe=utf-8&gws_rd=cr&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiItfj4htjJAhXCC44KHXo1DGAQ_AUICCgC'),
(6, 'name', 'Shailene'),
(7, 'about_me', 'I am "Full Stack Web Developer" in Melbourne, Australia. My work include Formula One, Porsche, Peroni Italy, Mission Australia, Pedders Suspension, Brown Brothers and ICON Movies.'),
(8, 'avatar', 'user.jpg'),
(9, 'skills', 'PHP, HTML5, CSS3, jQuery, Flash, Codeigniter, Magento, Opencart, Photoshop, Zoomla, Zencart, Wordpress '),
(10, 'designation', 'Web Developer'),
(11, 'email_address ', 'test@gmail.com'),
(12, 'meta_title', 'Shailene''s Resume'),
(13, 'meta_content', 'personel websote or resume for personal or corporate use'),
(14, 'meta_keywords', 'My Resume, blog, personal website'),
(15, 'username', 'admin'),
(16, 'password', 'wJwmcCuLvGEfUGvJ38HyPLSmQlK9sqGU/lvf8WwkRaDU0kq8I4gJutj3XWMfQMj0zVGByU05+kooOMbjGOd74A=='),
(17, 'mail_protocol', 'smtp'),
(18, 'mail_host', ''),
(19, 'mail_username', ''),
(20, 'mail_password', ''),
(21, 'mail_smtp_port', ''),
(21, 'skype', '');

DROP TABLE IF EXISTS `skills`;
CREATE TABLE IF NOT EXISTS `skills` (
  `skill_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) NOT NULL,
  `exp_year` int(11) NOT NULL,
  `exp_month` int(11) NOT NULL,
  `sort_order` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`skill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

DROP TABLE IF EXISTS `visitor_log`;
CREATE TABLE IF NOT EXISTS `visitor_log` (
  `vl_id` int(11) NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(100) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`vl_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

INSERT INTO `visitor_log` (`vl_id`, `ip_address`, `date`) VALUES
(1, '127.0.0.1', '2015-12-21'),
(2, '127.0.0.2', '2011-10-21'),
(3, '127.0.0.3', '2015-12-22'),
(4, '127.0.0.4', '2013-12-22'),
(5, '127.0.0.5', '2015-12-23'),
(6, '127.0.0.6', '2015-12-24'),
(7, '127.0.0.7', '2015-02-25'),
(8, '127.0.0.8', '2010-12-25'),
(9, '127.0.0.9', '2015-12-26'),
(10, '::1', '2015-12-22');