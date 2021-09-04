import axios from 'axios';
import jwt_decode from "jwt-decode";
import store from './store';
import { getUserInformation } from './actions/userActions';
import { GET_USER_INFO_SUCCESS } from './constants';
const baseURL = '/api'

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
export const register = (user) => axios.post(`${baseURL}/user/register`, user);
export const login = (user) => axios.post(`${baseURL}/user/login`, user);
export const logout = () => axios.delete(`${baseURL}/user/logout`);
export const refreshToken = () => axios.post(`${baseURL}/user/refreshToken`);

// task
export const createNewTask = (data) => axiosToken.post(`${baseURL}/task`, data);
export const getAllTask = (token) => axiosToken.get(`${baseURL}/task`)
export const getTaskById = (id) => axiosToken.get(`${baseURL}/task/${id}`);
export const updateTask = (id, data) => axiosToken.patch(`${baseURL}/task/${id}`,data);
export const deleteTask = (id) => axiosToken.delete(`${baseURL}/task/${id}`);

// // comment
export const createNewComment = (data) => axiosToken.post(`${baseURL}/comment`, data);
export const updateComment = (id, data) => axiosToken.patch(`${baseURL}/comment/${id}`, data);
export const deleteComment = (id) => axiosToken.delete(`${baseURL}/comment/${id}`);
