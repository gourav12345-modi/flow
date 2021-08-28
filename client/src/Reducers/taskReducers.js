import { ADD_TASK_FAIL, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, CREATE_COMMENT_SUCCESS, DELETE_COMMENT_FAIL, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_TASK_FAIL, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, GET_ALL_TASK_FAIL, GET_ALL_TASK_REQUEST, GET_ALL_TASK_SUCCESS, LOGOUT_SUCCESS, UPDATE_COMMENT_SUCCESS, UPDATE_TASK_FAIL, UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS } from "../constants";

const taskReducer = (state = {} ,action) => {
  switch(action.type) {
    case GET_ALL_TASK_REQUEST:
      return {loading: true}
    case GET_ALL_TASK_SUCCESS:
      return {loading: false, tasks: action.payload}
    case GET_ALL_TASK_FAIL:
      return {loading: false, error: action.payload}
    case UPDATE_TASK_REQUEST:
      return { ...state, updateTaskLoading: true}
    case UPDATE_TASK_SUCCESS:
      const newTaskList =[]
      state.tasks.map((task) => {
        if(task._id===action.payload._id) newTaskList.push(action.payload.task);
        else newTaskList.push(task);
      })
      return {...state, tasks: newTaskList, updateTaskLoading: false}
    case UPDATE_TASK_FAIL:
      return {...state, updateTaskLoading: false, updateTaskError: action.payload}
    case ADD_TASK_REQUEST:
      return {...state, addTasksLoading: true }
    case ADD_TASK_SUCCESS:
      return {...state, addTasksLoading: false, tasks: [action.payload, ...(state.tasks)]}
    case ADD_TASK_FAIL:
      return {...state, addTaskError: action.payload, addTasksLoading: false}
    case DELETE_TASK_REQUEST:
      return {...state, deleteTaskLoading: true}
    case DELETE_TASK_SUCCESS:
      const newTasks = state.tasks.filter((task)=> task._id !== action.payload)
      return {...state, tasks: newTasks, deleteTaskLoading: false}
    case DELETE_TASK_FAIL:
      return {...state, deleteTaskLoading: false , deleteTaskError: action.payload }
    case CREATE_COMMENT_SUCCESS:
      const index = state.tasks.map(function(task) { return task._id; }).indexOf(action.payload.taskId);
      if(index !=-1)
      state.tasks[index].comments = [action.payload.data,...state.tasks[index].comments]
      return {...state}
    case UPDATE_COMMENT_SUCCESS:
      const taskIndex = state.tasks.map(function (task) {return task._id}).indexOf(action.payload.taskId);
      if(taskIndex!==-1){
        const commentIndex = state.tasks[taskIndex].comments.map(function(comment) {return comment._id}).indexOf(action.payload.commentId)
        if(commentIndex!==-1) state.tasks[taskIndex].comments[commentIndex].description = action.payload.description
      }
      return {...state}
    case DELETE_COMMENT_SUCCESS:
      const indexOfTask = state.tasks.map(function (task) {return task._id}).indexOf(action.payload.taskId);
      if(indexOfTask!==-1){
        const commentDeleteIndex = state.tasks[indexOfTask].comments.map(function(comment) {return comment._id}).indexOf(action.payload.commentId);
        if(commentDeleteIndex>-1) state.tasks[indexOfTask].comments.splice(commentDeleteIndex,1);
      }
      return {...state}
    case LOGOUT_SUCCESS:
        return {}
    default: 
    return state;
  }
}

export  default taskReducer