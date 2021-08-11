const Comment = require('../models/comment');
const Task = require('../models/task');

// Create new comment
const createComment = async (req, res, next) => {
  const { description, taskId } = req.body;
  const comment = new Comment({
    creator: req.user.id,
    description,
  });
  try {
    const savedTask = await comment.save();
    const updatedTask = await Task
      .findOneAndUpdate({ _id: taskId }, { $push: { comments: savedTask._id } });
    res.send(updatedTask);
  } catch (error) {
    next(error);
  }
};

// Update Post
const updateComment = (req, res, next) => {
  const { description, commentId } = req.body;
  try {
    const updatedComment = Comment.findOneAndReplace({ _id: commentId, creator: req.user.id }, {
      description,
    }, { new: true });
    res.send(updatedComment);
  } catch (error) {
    next(error);
  }
};

// delete
const deleteComment = (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedComment = Comment.deleteOne({ _id: id, creator: req.user.id });
    res.send(deletedComment);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
};
