import React from 'react'
import '../css/taskCard.css';
import { useState } from 'react';

export default function TaskCard({task,openComments, setComments}) {
  const handleClick = () => {

    setComments(task);
    openComments(true);

  }
  return (
    <div className="taskCard">
      <div className="mainContent">
      <div className="heading">
        <p className="name">{task.title}</p>
        <p className="edit"><i className="fas fa-pen"></i></p>
      </div>
      <div className="time">
      {
        new Date(2000,12,10).toLocaleString()
      }
      </div>
      <div className="description">
        <p>{task.description}</p>
      </div>
      </div>
      <div className="bottom">
      <div className="commentsCount" onClick={handleClick}>{task.comments.length} Comments</div>
      <div className="delete"><i className="fas fa-trash-alt"></i></div>
      </div>

    </div>
  )
}
