const router = require('express').Router();
const {
  getCurrentUser, updateUser,
} = require('../controllers/users');
const { getCurrentUserValidator, updateUserValidator } = require('../middlewares/validation');

router.get('/users/me', getCurrentUserValidator, getCurrentUser);
router.patch('/users/me', updateUserValidator, updateUser);

module.exports = router;
