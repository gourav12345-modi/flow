import React from 'react'
import '../css/taskCard.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, updateTask } from '../actions/taskActions';

export default function TaskCard({task,openComments, setComments}) {
  const dispatch = useDispatch();
  const [updateTaskOpen, setUpdataTaskOpen ] = useState(false);
  const [updatedTask, setUpdatedTask ] = useState(task)
  const handleClick = () => {
    setComments(task);
    openComments(true);
  }

  const handleDelete = () => {
    dispatch(deleteTask(task._id))
  }
  const handleUpdate= () => {
    dispatch(updateTask(updatedTask))
    setUpdataTaskOpen(false)
  }
  return (
    <div className="taskCard">
    {  
    updateTaskOpen? (
      <div className="modal">
      <input type="text" value={updatedTask.title} onChange={(e) => setUpdatedTask({...updatedTask, title: e.target.value}) }/>
      <textarea  cols="30" rows="10" value={updatedTask.description} onChange={(e) => setUpdatedTask({...updatedTask, description: e.target.value})}></textarea>
      <div className="actions">
      <button className="add" onClick={handleUpdate}>Update</button>
      <button  className="cancel" onClick={(e)=>setUpdataTaskOpen(false)}>Cancel</button>
      </div>
    </div> 
    ):(
     <React.Fragment>
        <div className="mainContent">
      <div className="heading">
        <p className="name">{task.title}</p>
        <p className="edit" onClick = {(e) => setUpdataTaskOpen(true)}><i className="fas fa-pen"></i></p>
      </div>
      <div className="time">
      {
        new Date(task.updatedAt).toLocaleString()
      }
      </div>
      <div className="description">
        <p>{task.description}</p>
      </div>
      </div>
      <div className="bottom">
      <div className="commentsCount" onClick={handleClick}>{task.comments.length} Comments</div>
      <div className="delete" onClick={handleDelete}><i className="fas fa-trash-alt"></i></div>
      </div>

     
     </React.Fragment> 
    )
   }
    </div>
  )
}
