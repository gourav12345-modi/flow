import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './Reducers/userReducers';
import taskReducer from './Reducers/taskReducers'

const initialState = {}

const reducer = combineReducers({
  userInfo: userReducer,
  tasks: taskReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
