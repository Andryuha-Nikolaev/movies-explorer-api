const movieRouter = require('express').Router();
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/movies', getMovies);
movieRouter.post('/movies', createMovie);
movieRouter.delete('/movies/:movieId', deleteMovie);

module.exports = movieRouter;
