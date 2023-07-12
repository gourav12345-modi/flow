import React, { useEffect, useState } from 'react'
import { createNewBoard } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { createBoard } from '../actions/boardActions';
import FloatingFormPopup from './FloatingFormPopup';
import CreatableSelect from 'react-select/creatable';
import { addTask } from '../actions/taskActions';


function FloatingTaskPopup({ showPopup, setShowPopup }) {
    const [formData, setFormData] = useState({
        title: "",
        board: "",
        description: ""
    })
    const [createdBoardName, setCreatedBoardName] = useState('')
    const [boardOptions, setBoardOptions] = useState([])
    const [loadingCreateBoard, setLoadingCreateBoard] = useState(false);
    const dispatch = useDispatch();
    const boards = useSelector((state) => state.boards.boards) || []

    const handleCreateTask = (e) => {
        e.preventDefault();
        console.log(formData)
        const requestData = {
            ...formData,
            boardId: formData.board.value
        }
        dispatch(addTask(requestData, setShowPopup))
    }

    const handleNewBoardCreate = (boardName) => {
        setLoadingCreateBoard(true)
        setCreatedBoardName(boardName)
        setTimeout(() => {
            dispatch(createBoard({ title: boardName }, setLoadingCreateBoard))
        }, 2000)
    }

    useEffect(() => {
        const boardOptions = []
        boards.forEach(board => {
            if (createdBoardName === board.title) {
                setFormData((formData) => ({ ...formData, board: { value: board._id, label: board.title } }))
            }
            boardOptions.push({ value: board._id, label: board.title })
        });


        setBoardOptions(boardOptions)
    }, [boards, createdBoardName])

    const styles={
        control: (baseStyles, state) => ({
          ...baseStyles,
          fontSize: '18px',
          border: state.isFocused ?'2px solid black': '2px solid black',
          borderRadius: '5px',
          marginTop: '10px',
          outline: 'unset'
        }),
        option: (baseStyles, state) => ({
            ...baseStyles,
            fontSize: '15px'
        })
    }


    return (
        <FloatingFormPopup showPopup={showPopup} setShowPopup={setShowPopup} createHandler={handleCreateTask}>
            <CreatableSelect styles={styles} isClearable placeholder="Select Board" options={boardOptions} value={formData.board} onChange={(option) => setFormData({ ...formData, board: option })} onCreateOption={handleNewBoardCreate} isLoading={loadingCreateBoard} isDisabled={loadingCreateBoard} />
            <input
                type="text"
                name="task_title"
                placeholder="Task Title"
                value={formData.title}
                onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                }
            />

            <textarea
                name="task_description"
                placeholder="Task Description"
                value={formData.description}
                onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                }
            />
        </FloatingFormPopup>
    )
}

export default FloatingTaskPopup
