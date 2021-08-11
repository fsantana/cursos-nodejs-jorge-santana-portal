-- portal_noticias.noticias definition

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `noticia` text,
  `resumo` varchar(100) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `data_noticia` date DEFAULT NULL,
  `data_criacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4