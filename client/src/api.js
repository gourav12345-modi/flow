import axios from 'axios';
const baseURL = 'http://localhost:3000/api'
// user 
export const register = (user) => axios.post(`${baseURL}/user/register`, user);
export const login = (user) => axios.post(`${baseURL}/user/login`, user);
export const logout = () => axios.delete(`${baseURL}/user/logout`);
export const refreshToken = () => axios.post(`${baseURL}/user/refreshToken`);

// task
export const createNewTask = (data) => axios.post(`${baseURL}/task`, data);
export const getAllTask = () => axios.get(`${baseURL}/task`);
export const getTaskById = (id) => axios.get(`${baseURL}/task/${id}`);
export const updateTask = (id, data) => axios.patch(`${baseURL}/task/${id}`,data);
export const deleteTask = (id) => axios.delete(`${baseURL}/task/${id}`);

// comment
export const createNewComment = (data) => axios.post(`${baseURL}/comment`, data);
export const updateComment = (id, data) => axios.patch(`${baseURL}/comment/${id}`, data);
export const deleteComment = (id) => axios.delete(`${baseURL}/comment/${id}`);
