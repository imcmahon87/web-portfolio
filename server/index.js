
const db = require('./dbconfig');
var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('./server.key', 'utf8');
var certificate = fs.readFileSync('./server.crt', 'utf8');
const cors = require('cors');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(PORT, () => {
    console.log('Movie database server running on port ' + PORT);
});

app.get('/getAllMovies', (req, res) => {
    db.query('SELECT    Title, ReleaseYear Year, Runtime, Description, MovieID \
              FROM Movies \
              ORDER BY Title;', (err, result) => {
    if (err) {
        console.log(err);
    }
    res.send(result);
    });
});

app.get('/searchMovies/:search', (req, res) => {
    const search = '%' + req.params.search + '%';
    db.query('SELECT    Title, ReleaseYear Year, Runtime, Description, MovieID \
              FROM Movies \
              WHERE Title LIKE ? \
              ORDER BY Title;', search, (err, result) => {
    if (err) {
        console.log(err);
    }
    res.send(result);
    });
});

app.get('/getAllPeople', (req, res) => {
    db.query('SELECT	LastName, FirstName, DATE_FORMAT(People.BirthDate, "%M %d, %Y") BirthDate, PersonID \
              FROM	    People \
              ORDER BY  LastName;', (err, result) => {
    if (err) {
        console.log(err);
    }
    res.send(result);
    });
});

app.get('/searchPeople/:search', (req, res) => {
    const search = '%' + req.params.search + '%';
    db.query('SELECT    LastName, FirstName, DATE_FORMAT(People.BirthDate, "%M %d, %Y") BirthDate, PersonID \
              FROM      People \
              WHERE     LastName LIKE ? \
              OR        FirstName LIKE ? \
              ORDER BY  LastName;', [search, search], (err, result) => {
    if (err) {
        console.log(err);
    }
    res.send(result);
    });
});

app.get('/getMovie/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT    	Title, Description, Movies.MovieID, Movies.ReleaseYear, Runtime, \
                            p1.LastName dLastName, p1.FirstName dFirstName, p1.PersonID DirectorID, \
                            p2.LastName wLastName, p2.FirstName wFirstName, p2.PersonID WriterID, \
                            Awards.MovieAward Award, Movies_Awards.Category, \
                            Movies_Awards.Year AwardYear, Genres.Genre Genre, Genres.GenreID GenreID \
                FROM    	Movies \
                LEFT JOIN	Movies_Directors ON Movies_Directors.MovieID = Movies.MovieID \
                LEFT JOIN	People AS p1 ON p1.PersonID = Movies_Directors.PersonID \
                LEFT JOIN	Movies_Writers ON Movies_Writers.MovieID = Movies.MovieID \
                LEFT JOIN	People AS p2 ON p2.PersonID = Movies_Writers.PersonID \
                LEFT JOIN	Movies_Awards ON Movies_Awards.MovieID = Movies.MovieID \
                LEFT JOIN	Awards ON Awards.MovieAwardID = Movies_Awards.MovieAwardID \
                LEFT JOIN	Movies_Genres ON Movies_Genres.MovieID = Movies.MovieID \
                LEFT JOIN	Genres ON Genres.GenreID = Movies_Genres.GenreID \
                WHERE	    Movies.MovieID = ?;', id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.get('/getGenre/:genre', (req, res) => {
    const genre = req.params.genre;
    db.query('SELECT	Title, Description, Movies.MovieID, Genres.GenreID GenreID, Genres.Genre Genre \
              FROM		Movies \
              LEFT JOIN	Movies_Genres ON Movies_Genres.MovieID = Movies.MovieID \
              LEFT JOIN	Genres ON Genres.GenreID = Movies_Genres.GenreID \
              WHERE		Genres.GenreID = ? \
              ORDER BY  Title;', genre, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.get('/getPerson/:person', (req, res) => {
    const person = req.params.person;
    db.query('SELECT		LastName, FirstName, DATE_FORMAT(People.BirthDate, "%M %d, %Y") BirthDate, m1.Title Directed, m2.Title Wrote, m1.MovieID dMovieID, m2.MovieID wMovieID \
                            FROM		People \
                            LEFT JOIN	Movies_Directors ON Movies_Directors.PersonID = People.PersonID \
                            LEFT JOIN	Movies AS m1 ON m1.MovieID = Movies_Directors.MovieID \
                            LEFT JOIN	Movies_Writers ON Movies_Writers.PersonID = People.PersonID \
                            LEFT JOIN	Movies AS m2 ON m2.MovieID = Movies_Writers.MovieID \
                            WHERE		People.PersonID = ?;', person, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});