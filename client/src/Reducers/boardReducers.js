import {
  ADD_BOARD_FAIL,
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  CREATE_BOARD_FAIL,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_BOARD_FAIL,
  DELETE_BOARD_REQUEST,
  DELETE_BOARD_SUCCESS,
  GET_ALL_BOARD_FAIL,
  GET_ALL_BOARD_REQUEST,
  GET_ALL_BOARD_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_BOARD_FAIL,
  UPDATE_BOARD_REQUEST,
  UPDATE_BOARD_SUCCESS,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
} from "../constants";

const boardReducer = (state = {}, action) => {
  let newBoardList = [];
  let boardId = null;
  let data = null;

  switch (action.type) {
    case GET_ALL_BOARD_REQUEST:
      return { loading: true };
    case GET_ALL_BOARD_SUCCESS:
      return { loading: false, boards: action.payload };
    case GET_ALL_BOARD_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_BOARD_REQUEST:
      return { ...state, updateBoardLoading: true };
    case UPDATE_BOARD_SUCCESS:
      newBoardList = state.boards.map((board) => {
        if (board._id === action.payload._id)
          return action.payload.board
        return board
      });
      return { ...state, boards: newBoardList, updateBoardLoading: false };
    case UPDATE_BOARD_FAIL:
      return {
        ...state,
        updateBoardLoading: false,
        updateBoardError: action.payload,
      };
    case CREATE_BOARD_REQUEST:
      return { ...state, createBoardLoading: true };
    case CREATE_BOARD_SUCCESS:
      return {
        ...state,
        createBoardLoading: false,
        boards: [...state.boards, action.payload],
      };
    case CREATE_BOARD_FAIL:
      return { ...state, addBoardError: action.payload, createBoardLoading: false };
    case DELETE_BOARD_REQUEST:
      return { ...state, deleteBoardLoading: true };
    case DELETE_BOARD_SUCCESS:
      newBoardList = state.boards.filter(
        (board) => board._id !== action.payload
      );
      return { ...state, boards: newBoardList, deleteBoardLoading: false };
    case DELETE_BOARD_FAIL:
      return {
        ...state,
        deleteBoardLoading: false,
        deleteBoardError: action.payload,
      };
    case CREATE_TASK_SUCCESS:
      console.log(action.payload, "this is payload")
      newBoardList = state.boards.map((board) => {
        if (board._id === action.payload.boardId) return { ...board, tasks: [action.payload.data._id, ...board.tasks] }
        return board
      })
      return { ...state, boards: newBoardList };

      case DELETE_TASK_SUCCESS:
        newBoardList = state.boards.map((board) => {
          if (board._id === action.payload.boardId) return {...board, tasks: board.tasks.filter((task)=> task._id!==action.payload.taskId)}
          return board
        })
        
        return { ...state };
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default boardReducer;
