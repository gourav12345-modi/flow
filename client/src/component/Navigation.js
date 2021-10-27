import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import '../css/navigation.css';

export default function Navigation() {
  const {user, error, loading } = useSelector(state => state.userInfo);
  return (
   
      <div className="navigation">
        <div className="companyName">
          <h3>Flow</h3>
        </div>
        {user&& user.accessToken ? (
          <React.Fragment>
          
            <div className="userInfo">
          <div className="notification">
            <p>  <i className="far fa-bell"></i>  </p>
          </div>
          <div className="nameAndMore">
             <Link to="/dashboard" className="nameLink">
            <p>{user.name}</p>
            </Link>
          </div>
          <div className="userImage">
            <img src="./logo192.png" alt="user" />
          </div>
        </div>
        </React.Fragment>
        ):(
          <React.Fragment>
            <div className="userInfo">
          <Link to="/login" className="login">Login</Link>
          <Link to="/register" className="register">Register</Link>
          </div>
          </React.Fragment>
        )}
        

      
      </div>
   
  )
}
