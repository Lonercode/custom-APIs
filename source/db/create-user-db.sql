DROP DATABASE IF EXISTS testapi2;   
CREATE DATABASE testapi2;   
USE testapi2; 

DROP TABLE IF EXISTS posts; 

CREATE TABLE posts 
  ( 
     id   INT PRIMARY KEY auto_increment,
     title  VARCHAR(25) NOT NULL, 
     author  VARCHAR(60) NOT NULL, 
     content VARCHAR(50) NOT NULL, 
     
  ); 