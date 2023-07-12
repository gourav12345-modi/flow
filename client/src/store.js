import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./Reducers/userReducers";
import taskReducer from "./Reducers/taskReducers";
import boardReducer from "./Reducers/boardReducers"
import commentReducer from "./Reducers/commentReducer";

const initialState = {};

const reducer = combineReducers({
  userInfo: userReducer,
  tasks: taskReducer,
  boards: boardReducer,
  comments: commentReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
