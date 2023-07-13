import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../css/navigation.css";
import Button from "./Button";
import FloatingBoardPopup from "./FloatingBoardPopup";
import FloatingTaskPopup from "./FloatingTaskPopup";
import { logoutUser } from "../actions/userActions";

export default function Navigation() {
  const history = useHistory();
  const { user } = useSelector((state) => state.userInfo);
  const [createMenuOpen, setCreateMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [showNewBoardPopup, setShowNewBoardPopup] = useState(false);
  const [showNewTaskPopup, setShowNewTaskPopup] = useState(false);
  const dispatch = useDispatch();

  const handleNewBoardClick = (e) => {
    setCreateMenuOpen(false);
    setShowNewBoardPopup(true);
  }
  const handleNewTaskClick = (e) => {
    setCreateMenuOpen(false);
    setShowNewTaskPopup(true);
  }

  const handleLogout = () => {
    dispatch(logoutUser(history));
  };

  return (
    <React.Fragment>
      <div className="navigation">
        <div className="companyName">
          <h3>
            <Link to="/">Flow</Link>
          </h3>
        </div>
        {user && user.accessToken ? (
          <React.Fragment>
            <div className="userInfo">
              <div class="wrapper">
                <Button className="create-btn" onClick={() => setCreateMenuOpen((createMenuOpen) => !createMenuOpen)}>
                  <i class="fa fa-plus"></i>
                </Button>
                <ul className={"menu-bar create-menu-bar " + (createMenuOpen ? "active" : "")}>
                  <li onClick={handleNewTaskClick}>New Task</li>
                  <li onClick={handleNewBoardClick}>New Board</li>
                </ul>
              </div>
              <div className="wrapper">
                <div className="userImage" onClick={() => setProfileMenuOpen((profileMenuOpen) => !profileMenuOpen)}>
                  <img
                    src={user.profilePhoto}
                    alt="user"
                  />
                </div>
                <ul className={"menu-bar profile-menu-bar " + (profileMenuOpen ? "active" : "")}>
                  <li onClick={() => history.push("/account")}>Account</li>
                  <li onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="userInfo">
              <Button onClick={() => history.push("/login")} className="login">
                Login
              </Button>
              <Button
                onClick={() => history.push("/register")}
                className="register"
              >
                Register
              </Button>
            </div>
          </React.Fragment>
        )}
      </div>
     <FloatingBoardPopup showPopup={showNewBoardPopup} setShowPopup={setShowNewBoardPopup}/>
     <FloatingTaskPopup showPopup={showNewTaskPopup} setShowPopup={setShowNewTaskPopup} />
    </React.Fragment>
  );
}
