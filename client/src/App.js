import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInformation } from './actions/userActions';
import { getAllTask } from './actions/taskActions';
import React, { useEffect } from 'react';
import { CLEAR_LOG_DATA } from './constants';
import ProtectedRoute from './component/ProtectedRoute';
import { getAllBoard } from './actions/boardActions';
import { getAllComment } from './actions/commentActions';
import Profile from './pages/Profile';

function App() {
 
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  useEffect(()=>{
    dispatch(getUserInformation())
  }, [])
  useEffect(() => {
    if(userInfo.user && userInfo.user.accessToken)
     dispatch(getAllBoard())
     dispatch(getAllTask())
     dispatch(getAllComment())
  },[userInfo])
  return (
    <React.Fragment>
    {
     userInfo.userInfoLoading? ("loading.."):
       (
        <Router>
        <Switch>
          <Route exact path="/"> <Home /></Route>
          <ProtectedRoute path='/dashboard' component={Dashboard} />
          <ProtectedRoute path='/account' component={Profile} />
          <Route path="/register"> <Signup /></Route>
          <Route path="/login"> <Login /> </Route>
        </Switch>
    </Router>
      )
    }
    </React.Fragment>
    
  );
}

export default App;
