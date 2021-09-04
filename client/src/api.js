import axios from 'axios';
import jwt_decode from "jwt-decode";
import store from './store';
import { getUserInformation } from './actions/userActions';
import { GET_USER_INFO_SUCCESS } from './constants';

   const axiosToken = axios.create()
  axiosToken.interceptors.request.use(async (config) => {
    const State = store.getState();
    let token;
    if(State.userInfo.user && State.userInfo.user.accessToken) token = State.userInfo.user.accessToken

    const currentDate = new Date();
    const decodedData = jwt_decode(token);
    if(decodedData.exp *1000 < currentDate.getTime()){
      const {data} = await refreshToken();
      store.dispatch({type: GET_USER_INFO_SUCCESS, payload: data})
      config.headers["authorization"] = `Bearer ${data.accessToken}`
    } else {
      config.headers["authorization"] = `Bearer ${token}`
    }
    return config;
  },  (error) => {
    return Promise.reject(error);
  });


// user 
export const register = (user) => axios.post(`/user/register`, user);
export const login = (user) => axios.post(`/user/login`, user);
export const logout = () => axios.delete(`/user/logout`);
export const refreshToken = () => axios.post(`/user/refreshToken`);

// task
export const createNewTask = (data) => axiosToken.post(`/task`, data);
export const getAllTask = (token) => axiosToken.get(`/task`)
export const getTaskById = (id) => axiosToken.get(`/task/${id}`);
export const updateTask = (id, data) => axiosToken.patch(`/task/${id}`,data);
export const deleteTask = (id) => axiosToken.delete(`/task/${id}`);

// // comment
export const createNewComment = (data) => axiosToken.post(`/comment`, data);
export const updateComment = (id, data) => axiosToken.patch(`/comment/${id}`, data);
export const deleteComment = (id) => axiosToken.delete(`/comment/${id}`);
