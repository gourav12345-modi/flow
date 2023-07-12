import {
    CREATE_BOARD_FAIL,
    CREATE_BOARD_REQUEST,
    CREATE_BOARD_SUCCESS,
    DELETE_BOARD_FAIL,
    DELETE_BOARD_REQUEST,
    DELETE_BOARD_SUCCESS,
    GET_ALL_BOARD_FAIL,
    GET_ALL_BOARD_REQUEST,
    GET_ALL_BOARD_SUCCESS,
    UPDATE_BOARD_FAIL,
    UPDATE_BOARD_REQUEST,
    UPDATE_BOARD_SUCCESS,
} from "../constants";
import * as api from "../api";

const getAllBoard = () => async (dispatch) => {
    dispatch({ type: GET_ALL_BOARD_REQUEST });
    try {
        const { data } = await api.getAllBoard();
        dispatch({ type: GET_ALL_BOARD_SUCCESS, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_ALL_BOARD_FAIL, payload: error.response.data.message })
    }
};

const createBoard = (board, setLoading, setShowNewBoardPopup) => async (dispatch) => {
    dispatch({ type: CREATE_BOARD_REQUEST });
    try {
        const { data } = await api.createNewBoard(board);
        setLoading(false)
        setShowNewBoardPopup(false)
        dispatch({ type: CREATE_BOARD_SUCCESS, payload: data });
    } catch (err) {
        console.log(err);
        dispatch({ type: CREATE_BOARD_FAIL, payload: err.response.data.message })
    }
};

const deleteBoard = (id) => async (dispatch) => {
    dispatch({ type: DELETE_BOARD_REQUEST });
    try {
        await api.deleteBoard(id);
        dispatch({ type: DELETE_BOARD_SUCCESS, payload: id });
    } catch (err) {
        console.log(err)
        dispatch({ type: DELETE_BOARD_FAIL, payload: err?.response?.data?.message });
    }
};

const updateBoard = (board) => async (dispatch) => {
    dispatch({ type: UPDATE_BOARD_REQUEST });
    try {
        const { data } = await api.updateBoard(board._id, board);
        dispatch({
            type: UPDATE_BOARD_SUCCESS,
            payload: { _id: board._id, board: data },
        });
    } catch (err) {
        dispatch({ type: UPDATE_BOARD_FAIL, payload: err.response.data.message });
    }
};

export { getAllBoard, createBoard, deleteBoard, updateBoard };
