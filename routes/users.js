const userRouter = require('express').Router();
const {
  getCurrentUser, updateUser,
} = require('../controllers/users');
const { getCurrentUserValidator, updateUserValidator } = require('../middlewares/validation');

userRouter.get('/users/me', getCurrentUserValidator, getCurrentUser);
userRouter.patch('/users/me', updateUserValidator, updateUser);

module.exports = userRouter;
