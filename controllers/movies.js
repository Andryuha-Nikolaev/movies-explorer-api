const Movie = require('../models/movie');
const NotFound = require('../errors/notFound');
const BadRequest = require('../errors/badRequest');
const Forbidden = require('../errors/forbidden');

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => {
      res.send(movies);
    })
    .catch(next);
};

const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => res.send(movie))
    .catch((e) => {
      if (e.name === 'ValidationError') {
        next(
          new BadRequest(
            'Переданы некорректные данные при создании карточки фильма',
          ),
        );
      } else {
        next(e);
      }
    });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(() => {
      throw new NotFound('фильм с указанным _id не найден');
    })
    .then((movie) => {
      const owner = movie.owner.toString();
      if (req.user._id === owner) {
        Movie.deleteOne(movie)
          .then(() => {
            res.send(movie);
          })
          .catch(next);
      } else {
        throw new Forbidden('Невозможно удалить фильм');
      }
    })
    .catch((e) => {
      if (e.name === 'CastError') {
        next(new BadRequest('Переданы некорректные данные удаления'));
      } else {
        next(e);
      }
    });
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
