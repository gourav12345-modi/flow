import React, { useEffect } from "react";
import "../css/taskBoard.css";
import TaskCard from "./TaskCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../actions/taskActions";
import { addComment } from "../actions/commentActions";
import Comment from "./Comment";
import { deleteBoard } from "../actions/boardActions";
import Button from "./Button";

/*
  About input of TaskBoard
  title:- board name
  taskIds:- all tasks id associated with current board
*/
function TaskBoard({ _id, title, tasks }) {
  const [currentTask, setCurrentTask] = useState(null);
  const [newCommentData, setNewCommentData] = useState("");
  const [openNewComment, setOpenNewComment] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState({
    boardId: _id,
    title: "",
    description: "",
  });
  const [openMenuBar, setOpenMenuBar] = useState(false)
  const dispatch = useDispatch();
  const handleAddComment = (e) => {
    dispatch(
      addComment({
        commentData: newCommentData,
        taskId: currentTask._id,
        setOpenNewComment,
      })
    );
  };

  const handleAddTask = (e) => {
    dispatch(addTask(modal));
    setOpenModal(false);
  };

  useEffect(()=> {
    setCurrentTask((currentTask) => {
      if (currentTask) return tasks.find((task) => task._id === currentTask._id)
      return null
    })
  }, [tasks])

  return (
    <div className="taskBoard">
      {currentTask ? (
        <div className="comments">
          <div
            className="heading"
            onClick={(e) => {
              setCurrentTask(null)
            }}
          >
            <i className="fas fa-arrow-left"></i>Comments
          </div>
          <TaskCard
            task={currentTask}
            setCurrentTask={setCurrentTask}
          />
          <div className="commentsMessage">
            <button className="addMore" onClick={() => setOpenNewComment(true)}>
              + <span>Add Comment</span>
            </button>

            {openNewComment && (
              <div className="modal">
                <textarea
                  placeholder="Add comment here"
                  cols="30"
                  rows="10"
                  value={newCommentData}
                  onChange={(e) => setNewCommentData(e.target.value)}
                ></textarea>
                <div className="actions">
                  <Button className="add" onClick={handleAddComment}>Add</Button>
                  <Button className="cancel" onClick={(e) => setOpenNewComment(false)} >Cancel</Button>
                </div>
              </div>
            )}
            {currentTask.comments.map((message, index) => (
              <Comment
                message={message}
                key={message._id}
                taskId={currentTask._id}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="todo">
          <div className="heading">
            <p className="name">
              {title}
            </p>
            <div className="left">
              <p className="count">
                {tasks.length} {tasks.length > 1 ? "tasks" : "task"}
              </p>
              <ul className={"triple-dot-menu " + (openMenuBar ? "clicked" : "")}>
                <li className="menu-items" onClick={() => {
                  setOpenMenuBar(false);
                  setOpenModal(true)
                }}>Add task</li>
                <li className="menu-items" onClick={() => dispatch(deleteBoard(_id))}>Delete Board</li>
              </ul>
              <i className="fa fa-ellipsis-v triple-dot" onClick={() => setOpenMenuBar((openMenuBar) => !openMenuBar)}></i>

            </div>
          </div>

          <div className="content">
            {openModal && (
              <div className="modal">
                <input
                  type="text"
                  placeholder="Add title"
                  value={modal.title}
                  onChange={(e) =>
                    setModal({ ...modal, title: e.target.value })
                  }
                />
                <textarea
                  placeholder="Add description here"
                  cols="30"
                  rows="10"
                  value={modal.description}
                  onChange={(e) =>
                    setModal({ ...modal, description: e.target.value })
                  }
                ></textarea>
                <div className="actions">
                  <Button className="add" onClick={handleAddTask}>Add</Button>
                  <Button className="cancel" onClick={(e) => setOpenModal(false)}>Cancel</Button>
                </div>
              </div>
            )}
            {tasks.map((task) => {
              return (
                <TaskCard
                  task={task}
                  key={task._id}
                  setCurrentTask={setCurrentTask}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskBoard;
