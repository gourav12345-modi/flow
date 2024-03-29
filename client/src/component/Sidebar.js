import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
import "../css/sidebar.css";

export default function Sidebar(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser(history));
  };
  return (
    <div className="sidebar">
      <ul className="primary">
        <li>
          <p className="icon">
            <i className="fas fa-signal"></i>
          </p>
          <p className="name">Stats</p>
        </li>
        <li>
          <p className="icon">
            <i className="far fa-calendar-alt"></i>
          </p>
          <p className="name">Calander</p>
        </li>
        <li>
          <p className="icon">
            <i className="far fa-comment-alt"></i>
          </p>
          <p className="name">Chat</p>
        </li>
        <li>
          <p className="icon">
            <i className="far fa-user"></i>
          </p>
          <p className="name">Profile</p>
        </li>
      </ul>
      <ul className="secondary">
        <li>
          <p className="icon">
            <i className="fas fa-cog"></i>
          </p>
          <p className="name">Setting</p>
        </li>
        <li>
          <p className="icon">
            <i className="fas fa-sign-out-alt"></i>
          </p>
          <p className="name" onClick={handleLogout}>
            Logout
          </p>
        </li>
      </ul>
    </div>
  );
}
