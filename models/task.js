const mongoose = require('mongoose');
const Comment = require('./comment');

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  {
    timestamps: true,
  },
);

// Define the middleware to delete all the comments associated this task before deleting task
taskSchema.pre(['deleteMany', 'deleteOne'], async function (next) {
  const tasksQuery = this;

  try {
    // Find the tasks to be deleted
    const tasks = await this.model.find(tasksQuery);

    // Get the IDs of all comments to be deleted
    let commentIds = [];
    tasks.forEach((task) => {
      commentIds = [...commentIds, ...task.comments];
    });

    // Delete all comments associated with the tasks
    await Comment.deleteMany({ _id: { $in: commentIds } });

    next();
  } catch (error) {
    next(error);
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
