SELECT *
FROM movies;

INSERT INTO movies (movie_name)
VALUES ("Casablanca");

DELETE FROM movies
WHERE id = 7;

SELECT *
FROM movies
JOIN reviews ON reviews.movie_id = movies.id;