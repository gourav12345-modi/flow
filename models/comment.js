const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  creator: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
}, {
  timestamps: true,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
