import React from 'react'
import { Link } from 'react-router-dom';
import '../css/navigation.css';

export default function Navigation({ isAuth }) {
  return (
   
      <div className="navigation">
        <div className="companyName">
          <h3>Flow</h3>
        </div>
        {isAuth ? (
          <React.Fragment>
          <div className="searchBar">
          <i className="fas fa-search"></i>
          <input type="text" name="search" id="search" placeholder="Search" className="fontAwesome" />
          </div>
            <div className="userInfo">
          <div className="notification">
            <p>  <i className="far fa-bell"></i>  </p>
          </div>
          <div className="nameAndMore">
            <p>Gourav</p>
            <p><i className="fas fa-chevron-down"></i> </p>
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
