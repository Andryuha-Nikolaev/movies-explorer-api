const INTERNAL_SERVER_ERROR = require('../errors/statusCode');

const errorHandler = (err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    res.status(INTERNAL_SERVER_ERROR).send({ message: 'Произошла ошибка на сервере' });
  }
  next();
};

module.exports = errorHandler;
