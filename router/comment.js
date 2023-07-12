const router = require('express').Router();
const auth = require('../middleware/auth');
const commentController = require('../controllers/commentController');

// Create new Comment
router.post('/', auth, commentController.createComment);
// Get all Task
router.get('/', auth, commentController.getAllComment);
// Update Post
router.patch('/:id', auth, commentController.updateComment);
// delete
router.delete('/:id', auth, commentController.deleteComment);
module.exports = router;
