import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createBoard } from '../actions/boardActions';
import Button from './Button';
import "../css/floatingFormPopup.css"

function FloatingFormPopup({ showPopup, setShowPopup, className, children, createHandler }) {
  const [newBoardName, setNewBoardName] = useState("");
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCreateBoard = (e) => {
    e.preventDefault();
    setLoading(true)
    dispatch(createBoard({ title: newBoardName }, setLoading, setShowPopup))
  }
  return (
    <div className={'floating-form-bg ' + (showPopup ? "active " : " ") + (className ? className : " ")}>
      <form className="floating-form">
        {children}

        <div className='actions'>
          <Button className="cancel" onClick={(e) => {
            e.preventDefault();
            setShowPopup(false)
          }}>Cancel</Button>
          <Button className="create" onClick={createHandler}>Create</Button>
        </div>
      </form>
    </div>
  )
}

export default FloatingFormPopup