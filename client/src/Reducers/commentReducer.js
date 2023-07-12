import {
  COMMENT_ERROR,
  COMMENT_LOADING,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  GET_ALL_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
} from "../constants";

const commentReducer = (state = {}, action) => {
  let presentComments = []
  switch (action.type) {
    case COMMENT_LOADING:
      return { ...state, loading: true };
    case COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload
      }
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [action.payload.data, ...state.comments]
      }
    case DELETE_COMMENT_SUCCESS:
      presentComments = state.comments.filter((comment) => comment._id !== action.payload)
      return {
        ...state,
        comments: presentComments
      }
    case UPDATE_COMMENT_SUCCESS:
      presentComments = state.comments.map((comment) => {
        if (comment._id === action.payload._id) return action.payload 
        return comment
      })
      return {
        ...state,
        loading: false,
        comments: presentComments
      };
    default:
      return state;
  }
};

export default commentReducer;
