const Task = require('../models/task');

// Create new task
const createNewTask = async (req, res, next) => {
  const { title, description, status } = req.body;
  const task = new Task({
    creator: req.user.id,
    title,
    status,
    description,
  });
  try {
    const savedTask = await task.save();
    res.send(savedTask);
  } catch (error) {
    next(error);
  }
};

// Get all task
const getAllTask = async (req, res, next) => {
  try {
    const allTasks = await Task.find({ creator: req.user.id }).sort({ createdAt: -1 }).populate('comments');
    res.send(allTasks);
  } catch (error) {
    next(error);
  }
};

// Get a Task of given id
const getTaskById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await Task.find({ _id: id });
    res.send(task);
  } catch (error) {
    next(error);
  }
};

// Update Post
const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const {
    title, description, creator, status,
  } = req.body;
  try {
    const updatedTask = await Task.findOneAndReplace({ _id: id, creator: req.user.id }, {
      _id: id,
      creator,
      status,
      title,
      description,
    }, { new: true });
    res.send(updatedTask);
  } catch (error) {
    next(error);
  }
};

// delete
const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.deleteOne({ _id: id, creator: req.user.id });
    res.send(deletedTask);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
};
