const router = require('express').Router();
const userController = require('../controllers/userController');
// Register user
router.post('/register', userController.register);
// User login
router.post('/login', userController.login);
// user logout
router.delete('/logout', userController.logout);
// refresh token
router.post('/refreshToken', userController.getToken);
module.exports = router;
