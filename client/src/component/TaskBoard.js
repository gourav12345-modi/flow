import React from 'react'
import '../css/taskBoard.css'
import TaskCard from './TaskCard'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../actions/taskActions'
import { addComment } from '../actions/commentActions'
import Comment from './Comment'

function TaskBoard({ type, tasks }) {
  const [openComments, setOpenComments] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [comment, setComments] = useState(tasks[0]);
  const [modal, setModal] = useState({
    status: type,
    title: '',
    description: ''
  })
  const [openNewComment, setOpenNewComment] = useState(false)
  const [commentData, setCommentData] = useState('');
  const dispatch = useDispatch();

  const handleAddComment = (e) => {
    dispatch(addComment({ commentData: commentData, taskId: comment._id, setOpenNewComment }))
  }

  const handleAddTask = (e) => {
    dispatch(addTask(modal))
    setOpenModal(false)
  }
  return (
    <div className="taskBoard">
      {
        openComments ? (
          <div className="comments">
            <div className="heading" onClick={(e) => { setOpenComments(false) }}><i className="fas fa-arrow-left"></i>Comments</div>
            <TaskCard task={comment} openComments={setOpenComments} setComments={setComments} />
            <div className="commentsMessage">
              <button className="addMore" onClick={() => setOpenNewComment(true)}>+</button>


              {
                openNewComment && (
                  <div className="modal">
                    <textarea cols="30" rows="10" value={commentData} onChange={(e) => setCommentData(e.target.value)}></textarea>
                    <div className="actions">
                      <button className="add" onClick={handleAddComment}>Add</button>
                      <button className="cancel" onClick={(e) => setOpenNewComment(false)}>Cancel</button>
                    </div>
                  </div>
                )
              }
              {
                comment.comments.map((message, index) => (
                  <Comment message={message} key={message._id} taskId={comment._id}/>
                ))
              }
            </div>
          </div>
        ) : (
          <div className="todo">
            <div className="heading">
              <p className="name">
                {
                  type === 0 ? ("To Do") :
                    type === 1 ? ("In Progress") :
                      ("Done")
                }
              </p>

              <p className="count">{tasks.length}</p>
            </div>
            <button className="addMore" onClick={() => setOpenModal(true)}>+</button>
            <div className="content">

              {
                openModal && (
                  <div className="modal">
                    <input type="text" value={modal.title} onChange={(e) => setModal({ ...modal, title: e.target.value })} />
                    <textarea cols="30" rows="10" value={modal.description} onChange={(e) => setModal({ ...modal, description: e.target.value })}></textarea>
                    <div className="actions">
                      <button className="add" onClick={handleAddTask}>Add</button>
                      <button className="cancel" onClick={(e) => setOpenModal(false)}>Cancel</button>
                    </div>
                  </div>
                )
              }
              {
                tasks.map((task) => {
                  return <TaskCard task={task} key={task._id} openComments={setOpenComments} setComments={setComments} />
                })
              }
            </div>
          </div>
        )
      }


    </div>
  )
}

export default TaskBoard;
