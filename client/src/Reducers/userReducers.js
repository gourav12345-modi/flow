import {  CLEAR_LOG_DATA, GET_USER_INFO_FAIL, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "../constants";

const userReducer = (state= {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true, error: false }
    case REGISTER_SUCCESS:
      return { loading: false, message: action.payload }
    case REGISTER_FAIL:
      return { loading: false, error: action.payload }
    case LOGIN_REQUEST:
      return { loading: true, error: false }
    case LOGIN_SUCCESS:
      return { loading: false, user: action.payload, error: false, message: 'User LoggedIn' }
    case LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case LOGOUT_REQUEST:
      return { ...state , loading: true }
    case GET_USER_INFO_REQUEST:
      return { userInfoLoading: true}
    case GET_USER_INFO_SUCCESS:
      return { userInfoLoading: false, user: action.payload }
    case GET_USER_INFO_FAIL:
      return { userInfoLoading: false }
    case LOGOUT_SUCCESS:
      return {}
    case CLEAR_LOG_DATA:
      return {...state, message:'', error: false, loading: false }
    default:
      return state;
  }
}

export default userReducer ;