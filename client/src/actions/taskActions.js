import { ADD_TASK_REQUEST, ADD_TASK_SUCCESS, DELETE_TASK_FAIL, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, GET_ALL_TASK_REQUEST, GET_ALL_TASK_SUCCESS, UPDATE_TASK_FAIL, UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS } from "../constants"
import * as api from '../api';

const getAllTask = () => async (dispatch) => {
  dispatch({ type: GET_ALL_TASK_REQUEST });
  try {
    const { data }  = await api.getAllTask();
    dispatch({ type: GET_ALL_TASK_SUCCESS , payload: data})
  } catch (error) {
    console.log(error);
  }
}

const addTask = (task) => async (dispatch) => {
  dispatch({type: ADD_TASK_REQUEST});
  try {
    const {data} = await api.createNewTask(task);
    dispatch({type: ADD_TASK_SUCCESS, payload: data })
  } catch(err) {
    console.log(err)
  }
}

const deleteTask = (id) => async (dispatch) => {
  dispatch({type: DELETE_TASK_REQUEST});
  try {
    await api.deleteTask(id)
    dispatch({type: DELETE_TASK_SUCCESS, payload: id })
  } catch (err) {
    dispatch({type: DELETE_TASK_FAIL})
  }
}

const updateTask = (task) => async (dispatch) => {
  dispatch({type: UPDATE_TASK_REQUEST});
  try {
    const {data} = await api.updateTask(task._id, task)
    dispatch({type: UPDATE_TASK_SUCCESS, payload: { _id: task._id, task:data}})
  } catch(err) {
    
    dispatch({type: UPDATE_TASK_FAIL, payload: err.response.data.message })
  }
}

export {getAllTask, addTask, deleteTask, updateTask}