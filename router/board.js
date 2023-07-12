const router = require('express').Router();
const auth = require('../middleware/auth');
const boardController = require('../controllers/boardController');

// Create new Board
router.post('/', auth, boardController.createNewBoard);
// Get all Boards
router.get('/', auth, boardController.getAllBoard);
// Update Board of given id
router.patch('/:id', auth, boardController.updateBoard);
// delete Board of given id
router.delete('/:id', auth, boardController.deleteBoard);
module.exports = router;
