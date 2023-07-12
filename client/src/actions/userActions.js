import { login, logout, refreshToken, register } from "../api";
import {
  GET_USER_INFO_FAIL,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants";

const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const { data } = await register(formData);
    dispatch({ type: REGISTER_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
  }
};

const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await login(formData);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

const getUserInformation = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_INFO_REQUEST });
    const { data } = await refreshToken();
    dispatch({ type: GET_USER_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_INFO_FAIL });
  }
};

const logoutUser = (history) => async (dispatch) => {
  try {
    await logout();
    dispatch({ type: LOGOUT_SUCCESS });
    history.push("/");
  } catch (error) {
    // dispatch({type: LOGOUT_FAIL, payload : error.response.data.message});
    console.log(error);
  }
};
export { registerUser, loginUser, getUserInformation, logoutUser };
