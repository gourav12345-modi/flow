const mongoose = require('mongoose');
const Task = require('./task');

const { Schema } = mongoose;

const boardSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  },
  {
    timestamps: true,
  },
);

// Define the middleware to delete the tasks associated with the board before deleting board
boardSchema.pre('deleteOne', async function (next) {
  const board = await this.model.findOne(this.getQuery());

  if (!board) {
    return next(); // Board not found, proceed with the deletion
  }

  // Delete all tasks associated with the board
  await Task.deleteMany({ _id: { $in: board.tasks } });

  next();
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
