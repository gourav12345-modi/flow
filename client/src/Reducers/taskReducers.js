import {
  CREATE_TASK_FAIL,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_TASK_FAIL,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  GET_ALL_TASK_FAIL,
  GET_ALL_TASK_REQUEST,
  GET_ALL_TASK_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
} from "../constants";

const taskReducer = (state = {}, action) => {
  let tasksTemp;
  switch (action.type) {
    case GET_ALL_TASK_REQUEST:
      return { loading: true };
    case GET_ALL_TASK_SUCCESS:
      return { loading: false, tasks: action.payload };
    case GET_ALL_TASK_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_TASK_REQUEST:
      return { ...state, updateTaskLoading: true };
    case UPDATE_TASK_SUCCESS:
      const newTaskList = [];
      state.tasks.map((task) => {
        if (task._id === action.payload._id)
          newTaskList.push(action.payload.task);
        else newTaskList.push(task);
      });
      return { ...state, tasks: newTaskList, updateTaskLoading: false };
    case UPDATE_TASK_FAIL:
      return {
        ...state,
        updateTaskLoading: false,
        updateTaskError: action.payload,
      };
    case CREATE_TASK_REQUEST:
      return { ...state, addTasksLoading: true };
    case CREATE_TASK_SUCCESS:
      const tasksPresent = state.tasks || []
      return {
        ...state,
        addTasksLoading: false,
        tasks: [action.payload.data, ...tasksPresent],
      };
    case CREATE_TASK_FAIL:
      return { ...state, addTaskError: action.payload, addTasksLoading: false };
    case DELETE_TASK_REQUEST:
      return { ...state, deleteTaskLoading: true };
    case DELETE_TASK_SUCCESS:
      const newTasks = state.tasks.filter(
        (task) => task._id !== action.payload
      );
      return { ...state, tasks: newTasks, deleteTaskLoading: false };
    case DELETE_TASK_FAIL:
      return {
        ...state,
        deleteTaskLoading: false,
        deleteTaskError: action.payload,
      };
    case CREATE_COMMENT_SUCCESS:
      tasksTemp = state.tasks.map((task) => {
        if (action.payload.taskId !== task._id) return task
        return {...task, comments: [...task.comments, action.payload.data._id]}
      })

      console.log("Create comments ", tasksTemp)
      return { ...state, tasks: tasksTemp };
    
    case DELETE_COMMENT_SUCCESS:
      tasksTemp =  state.tasks.map((task) => {
        if (action.payload.taskId !== task._id) return task
        return {...task, comments: task.comments.map((comment) => comment!==action.payload.commentId)}
      })
      return { ...state, tasks: tasksTemp };
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default taskReducer;
