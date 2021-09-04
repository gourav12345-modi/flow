const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: Number,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
