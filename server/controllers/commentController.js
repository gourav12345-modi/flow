const Comment = require('../models/comment');
const Task = require('../models/task');

// Create new comment
const createComment = async (req, res, next) => {
  const { commentData, taskId } = req.body;
  const comment = new Comment({
    creator: req.user.id,
    description: commentData,
  });
  try {
    const savedTask = await comment.save();
    const updatedTask = await Task
      .findOneAndUpdate({ _id: taskId }, { $push: { comments: savedTask._id } });
    res.send(savedTask);
  } catch (error) {
    next(error);
  }
};

// Update Post
const updateComment = async (req, res, next) => {
  const { id } = req.params;
  const { description } = req.body;
  console.log(id, description, req.user.id);
  try {
    const updatedComment = await Comment
      .updateOne({ _id: id, creator: req.user.id }, {
        description,
      });
    res.send(updatedComment);
  } catch (error) {
    next(error);
  }
};

// delete
const deleteComment = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedComment = await Comment.deleteOne({ _id: id, creator: req.user.id });
    res.json({ deleteId: id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
};
