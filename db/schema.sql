DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_name VARCHAR(30) NOT NULL
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    review TEXT NOT NULL,
    movie_id INT,
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);
