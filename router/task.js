const router = require('express').Router();
const auth = require('../middleware/auth');
const taskController = require('../controllers/taskController');

// Create new Task
router.post('/', auth, taskController.createNewTask);
// Get all Task
router.get('/', auth, taskController.getAllTask);
// Get a Task of given id
router.get('/:id', auth, taskController.getTaskById);
// Update Task of given id
router.patch('/:id', auth, taskController.updateTask);
// delete Task of given id
router.delete('/:id', auth, taskController.deleteTask);
module.exports = router;
