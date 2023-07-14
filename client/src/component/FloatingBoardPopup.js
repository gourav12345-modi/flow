import React, { useEffect, useState } from 'react'
import { createNewBoard } from '../api';
import { useDispatch } from 'react-redux';
import { createBoard } from '../actions/boardActions';
import FloatingFormPopup from './FloatingFormPopup';

function FloatingBoardPopup({ showPopup, setShowPopup }) {
    const [createDisabled, setCreateDisabled] = useState(false)
    const [newBoardName, setNewBoardName] = useState("");
    const [Loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleCreateBoard = (e) => {
        e.preventDefault();
        setLoading(true)
        dispatch(createBoard({ title: newBoardName }, setLoading, setShowPopup))
    }

    useEffect(() => {
        if (newBoardName) setCreateDisabled(false)
        else setCreateDisabled(true)
    }, [newBoardName])

    return (
        <FloatingFormPopup showPopup={showPopup} setShowPopup={setShowPopup} createHandler={handleCreateBoard} createDisabled={createDisabled}>
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
        </FloatingFormPopup>

    )
}

export default FloatingBoardPopup