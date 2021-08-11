const Task = require('../models/task');

// Create new task
const createNewTask = async (req, res, next) => {
  const { title, description } = req.body;
  const task = new Task({
    creator: req.user.id,
    title,
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
const getAllTask = async (_req, res, next) => {
  try {
    const allTasks = await Task.find();
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
const updateTask = (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updatedTask = Task.findOneAndReplace({ _id: id, creator: req.user.id }, {
      title,
      description,
    }, { new: true });
    res.send(updatedTask);
  } catch (error) {
    next(error);
  }
};

// delete
const deleteTask = (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedTask = Task.deleteOne({ _id: id, creator: req.user.id });
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
