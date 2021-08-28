import { COMMENT_ERROR, COMMENT_LOADING, CREATE_COMMENT_SUCCESS, DELETE_COMMENT_SUCCESS,UPDATE_COMMENT_SUCCESS } from "../constants";

const commentReducer = (state={}, action)  => {
  switch(action.type) {
    case COMMENT_LOADING:
      return {loading: true}
    case COMMENT_ERROR:
      return {
        loading: false,
        error: action.payload
      }
    case CREATE_COMMENT_SUCCESS:
    case DELETE_COMMENT_SUCCESS:
    case UPDATE_COMMENT_SUCCESS:
      return {
        loading: false
      }
    default: 
      return state;
  }
}

export default commentReducer