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
import React, { useEffect } from 'react';
import { CLEAR_LOG_DATA } from './constants';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUserInformation())
  }, [])
  const { userInfoLoading  } = useSelector((state) => state.userInfo);
  return (
    <React.Fragment>
    {
      userInfoLoading? ("loading.."):
       (
        <Router>
        <Switch>
          <Route exact path="/"> <Home /></Route>
          <Route path="/Dashboard"> <Dashboard /> </Route>
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
