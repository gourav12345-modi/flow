import React, { useState } from 'react'
import "../css/newboardPopup.css"
import Button from './Button';
import { createNewBoard } from '../api';
import { useDispatch } from 'react-redux';
import { createBoard } from '../actions/boardActions';

function BoardPopup({ showNewBoardPopup, setShowNewBoardPopup }) {
    const [newBoardName, setNewBoardName] = useState("");
    const [Loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleCreateBoard = (e) => {
        e.preventDefault();
        setLoading(true)
        dispatch(createBoard({title: newBoardName}, setLoading, setShowNewBoardPopup))
    }

    return (
        <div className={'new-board-form-bg-wrapper ' + (showNewBoardPopup ? "active" : "")}>
            <form className="new_board_popup">
                <input
                    type="text"
                    name="board_name"
                    id="board_name_input"
                    placeholder="Board Name"
                    value={newBoardName}
                    onChange={(e) =>
                        setNewBoardName(e.target.value)
                    }
                />

                <div className='actions'>
                    <Button className="cancel" onClick={(e) => {
                        console.log(e.target)
                        e.preventDefault();
                        setShowNewBoardPopup(false)
                    }}>Cancel</Button>
                    <Button className="create" onClick={handleCreateBoard}>Create</Button>
                </div>
            </form>
        </div>
    )
}

export default BoardPopup