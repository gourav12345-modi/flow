import { useDispatch } from "react-redux";
import { deleteGivenComment, editComment } from "../actions/commentActions";
import React, { useState } from "react";

function Comment({ message, taskId }) {
  const [openEditComment, setOpenEditComment] = useState(false);
  const [commentData, setCommentData] = useState(message);
  const dispatch = useDispatch();
  const handleUpdateComment = () => {
    dispatch(
      editComment({
        description: commentData.description,
        commentId: message._id,
        taskId,
        setOpenEditComment,
      })
    );
  };

  const handleCommentDelete = () => {
    dispatch(deleteGivenComment({ commentId: message._id, taskId }));
  };

  return openEditComment ? (
    <div className="modal">
      <textarea
        cols="30"
        rows="10"
        value={commentData.description}
        onChange={(e) =>
          setCommentData({ ...commentData, description: e.target.value })
        }
      ></textarea>
      <div className="actions">
        <button className="add" onClick={handleUpdateComment}>
          Update
        </button>
        <button className="cancel" onClick={(e) => setOpenEditComment(false)}>
          Cancel
        </button>
      </div>
    </div>
  ) : (
    <div className="messageContainer">
      <div className="message-content">
      <div className="messageTime">
        {new Date(message.createdAt).toLocaleString()}
      </div>
      <div className="message">{message.description}</div>
      </div>
      <div className="action">
        <div
          className="edit"
          onClick={(e) => {
            setOpenEditComment(true);
          }}
        >
          <i className="fas fa-pen"></i>
        </div>
        <div className="delete" onClick={handleCommentDelete}>
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
}

export default Comment;
