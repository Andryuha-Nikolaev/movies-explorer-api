// require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
// const { errors, Joi, celebrate } = require('celebrate');
// const { createUser, login } = require('./controllers/users');
// const auth = require('./middlewares/auth');
// const cors = require('./middlewares/cors');
// const { requestLogger, errorLogger } = require('./middlewares/logger');
// const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
// const INTERNAL_SERVER_ERROR = require('./errors/statusCode');
// const NotFound = require('./errors/notFound');

const { PORT = 3000 } = process.env;

const app = express();

// const app = express();

// const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/moviesdb');

app.use(express.json());

// app.use(cors);

// app.use(requestLogger);

// app.get('/crash-test', () => {
//   setTimeout(() => {
//     throw new Error('Сервер сейчас упадёт');
//   }, 0);
// });

// app.post('/signin', celebrate({
//   body: Joi.object().keys({
//     email: Joi.string().required().email({ tlds: { allow: false } }),
//     password: Joi.string().required(),
//   }),
// }), login);
// app.post('/signup', celebrate({
//   body: Joi.object().keys({
//     name: Joi.string().min(2).max(30),
//     about: Joi.string().min(2).max(30),
//     avatar: Joi.string().regex(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/),
//     email: Joi.string().required().email({ tlds: { allow: false } }),
//     password: Joi.string().required(),
//   }),
// }), createUser);

// // авторизация
// app.use(auth);

// app.use('/', userRouter);
app.use('/', movieRouter);
// app.use('*', (req, res, next) => {
//   next(new NotFound('Страница не найдена'));
// });

// app.use(errorLogger);

// app.use(errors());

// app.use((err, req, res, next) => {
//   if (err.statusCode) {
//     res.status(err.statusCode).send({ message: err.message });
//   } else {
//     res.status(INTERNAL_SERVER_ERROR).send({ message: 'Произошла ошибка на сервере' });
//   }
//   next();
// });

app.listen(PORT);

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
// });
