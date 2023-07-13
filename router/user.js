const router = require('express').Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

// Register user
router.post('/register', userController.register);
// User login
router.post('/login', userController.login);
// user logout
router.delete('/logout', userController.logout);
// refresh token
router.post('/refreshToken', userController.getToken);
// change password
router.patch('/changePassword', auth, userController.changePassword);

module.exports = router;
