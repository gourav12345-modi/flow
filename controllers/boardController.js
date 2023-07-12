const Board = require('../models/board');

// Create new Board
const createNewBoard = async (req, res, next) => {
  const { title } = req.body;
  const board = new Board({
    creator: req.user.id,
    title,
  });
  try {
    const savedBoard = await board.save();
    res.send(board);
  } catch (error) {
    next(error);
  }
};

// Get all Board
const getAllBoard = async (req, res, next) => {
  try {
    const allBoards = await Board.find({ creator: req.user.id })
      .sort({ createdAt: -1 });

    res.send(allBoards);
  } catch (error) {
    next(error);
  }
};

// Update Board
const updateBoard = async (req, res, next) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    const updatedTask = await Board.findOneAndUpdate(
      { _id: id, creator: req.user.id },
      {
        title,
      },
      { new: true },
    );
    res.send(updatedTask);
  } catch (error) {
    next(error);
  }
};

// delete
const deleteBoard = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedBoard = await Board.deleteOne({ _id: id, creator: req.user.id });
    res.send(deletedBoard);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewBoard,
  getAllBoard,
  updateBoard,
  deleteBoard,
};
