CREATE DATABASE curriculum;

USE curriculum;

CREATE Table perfil(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    identific VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
)


CREATE TABLE studies(
    id INT NOT NULL AUTO_INCREMENT,
    studi1 VARCHAR(255) NOT NULL,
    studi2 VARCHAR(255) NOT NULL,
    studi3 VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

Experiences

CREATE TABLE experiences(
    id INT NOT NULL AUTO_INCREMENT,
    experiencies1 VARCHAR(255) NOT NULL,
    experiencies2 VARCHAR(255) NOT NULL,
    experiencies3 VARCHAR(255) NOT NULL,
    experiencies4 VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

References

CREATE TABLE refer(
    id INT NOT NULL AUTO_INCREMENT,
    refer1 VARCHAR(255) NOT NULL,
    refer2 VARCHAR(255) NOT NULL,
    refer3 VARCHAR(255) NOT NULL,
    refer4 VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);