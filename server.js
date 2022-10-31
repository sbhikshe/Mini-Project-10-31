const express = require('express');
const path = require('path');
const mysql2 = require('mysql2')
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = mysql2.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Shikari11!',
      database: 'movie_db'
    },
    console.log(`Connected to the movie_db database.`)
  );

app.get('/api/movies', (req,res) => {
    console.log(`${req.method} request recived to get movie`);
    db.query('SELECT * FROM movies;', (err, results) => {
        console.log(results);
        res.json(results);
    })
});

app.post('/api/add-movie', (req, res) => {
    console.log(`${req.params.movie_name} request received to add a movie`);
    db.query(`INSERT INTO movies (movie_name) VALUES ("${req.params.movie_name}");`, (req, res) => {
        console.log(res);
        res.json(res);
    })
});

app.delete('/api/movie/:id', (req,res) => {
    console.log(`${req.method} request received to delete`);
});

app.get('/api/movie-reviews', (req, res) => {
    console.log(`${req.method} request recieved to get movie reviews`);
});

app.put('/api/review/:id', (req, res) => {
    console.log(`${req.method} request recieved to update review`);
});

app.listen(PORT, () =>
console.log(`App listening at http://localhost${PORT}`)
);