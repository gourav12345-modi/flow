import React from 'react'
import '../css/taskBoard.css'
import TaskCard from './TaskCard'
import { useState } from 'react'

function TaskBoard({type, tasks }) {
  const [openComments, setOpenComments] = useState(false)
  const [comment, setComments] = useState(tasks[0]);
  return (
    <div className="taskBoard">
      {
        openComments?(
         <div className="comments">
           <div className="heading" onClick={(e)=> { setOpenComments(false)}}><i className="fas fa-arrow-left"></i>Comments</div>
            <TaskCard task={comment}openComments={setOpenComments} setComments={setComments} />
            <div className="commentsMessage">
            <button className="addMore">+</button>
              
              { 
               
                comment.comments.map((message,index) => (
                  
                  <div className="messageContainer" key={index}>
                   <div className="messageTime">{message.time}</div>
                  <div className="message">{message.message}</div>
                  </div>
                  
                ))
              }
            </div>
         </div>
        ):(
          <div className="todo">
          <div className="heading">
            <p className="name">
            {
             type===0? ("To Do"):
             type===1? ("In Progress"):
             ("Done")
          }
            </p>
          
            <p className="count">{tasks.length}</p>
          </div>
          <button className="addMore">+</button>
          <div className="content">
            {
              tasks.map((task) => (
                <TaskCard task={task} key={task._id} openComments={setOpenComments} setComments={setComments}/>
              ))
            }
          </div>
        </div>
        )
      }
      
    
    </div>
  )
}

export default TaskBoard;
