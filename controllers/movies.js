const Movie = require('../models/movie');

const getMovies = (req, res) => {
  Movie.find({})
    .then((movies) => {
      res.send(movies);
    });
};

const createMovie = (req, res) => {
  const { country, director } = req.body;
  Movie.create({ country, director })
    .then((movie) => res.send(movie));
};

const deleteMovie = (req, res) => {
  Movie.findByIdAndRemove(req.params.movieId)
    .then((movie) => res.send(movie));
};

module.exports = {
  getMovies, createMovie, deleteMovie,
};
