const movieRouter = require('express').Router();
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');
const { createMovieValidator, deleteMovieValidator } = require('../middlewares/validation');

movieRouter.get('/movies', getMovies);
movieRouter.post('/movies', createMovieValidator, createMovie);
movieRouter.delete('/movies/:movieId', deleteMovieValidator, deleteMovie);

module.exports = movieRouter;
