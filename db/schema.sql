DROP DATABASE IF EXISTS eat_da_burger_db;
CREATE DATABASE eat_da_burger_db;
USE eat_da_burger_db;
CREATE TABLE `burgers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT, /*unsigned means we don't expect the number to ever be negative */
  `burger_name` varchar(64) DEFAULT NULL,
  `devoured` tinyint(1) DEFAULT NULL, /*https://stackoverflow.com/questions/3751853/boolean-vs-tinyint1-for-boolean-values-in-mysql */
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8; /* https://dev.mysql.com/doc/refman/5.7/en/using-innodb-tables.html */


/* to initially set up your database, you're going to want to use
sequel pro or mysql workbench and copy and paste the contents of this file
AND seeds.sql and execute the query/code */