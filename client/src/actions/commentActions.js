import { createNewComment, deleteComment, updateComment } from "../api";
import {
  COMMENT_ERROR,
  COMMENT_LOADING,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  GET_ALL_COMMENT_REQUEST,
  GET_ALL_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
} from "../constants";

import * as api from "../api"

const getAllComment = () => async (dispatch) => {
  dispatch({ type: GET_ALL_COMMENT_REQUEST });
  try {
    const { data } = await api.getAllComment();
    dispatch({ type: GET_ALL_COMMENT_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: COMMENT_ERROR, payload: error?.response?.data?.message });
  }
};

const addComment = (comment) => async (dispatch) => {
  dispatch({ type: COMMENT_LOADING });
  try {
    const { commentData, taskId, setOpenNewComment } = comment;
    const { data } = await createNewComment({ commentData, taskId });
    dispatch({
      type: CREATE_COMMENT_SUCCESS,
      payload: { data, taskId: taskId },
    });
    setOpenNewComment(false);
  } catch (error) {
    console.log(error)
    dispatch({ type: COMMENT_ERROR, payload: error?.response?.data?.message });
  }
};

const editComment = (comment) => async (dispatch) => {
  dispatch({ type: COMMENT_LOADING });
  try {
    const { commentId, description, setOpenEditComment, taskId } = comment;
    await updateComment(commentId, { description });
    dispatch({
      type: UPDATE_COMMENT_SUCCESS,
      payload: { description, commentId, taskId },
    });
    setOpenEditComment(false);
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error.response.data.message });
  }
};

const deleteGivenComment = (data) => async (dispatch) => {
  dispatch({ type: COMMENT_LOADING });
  try {
    const { commentId, taskId } = data;
    await deleteComment(commentId);
    dispatch({ type: DELETE_COMMENT_SUCCESS, payload: { taskId, commentId } });
  } catch (error) {
    dispatch({ type: COMMENT_ERROR, payload: error.response.data.message });
  }
};

export { getAllComment, addComment, editComment, deleteGivenComment };
