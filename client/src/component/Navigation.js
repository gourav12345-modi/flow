import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../css/navigation.css";
import Button from "./Button";
import BoardPopup from "./BoardPopup";

export default function Navigation() {
  const history = useHistory();
  const { user } = useSelector((state) => state.userInfo);
  const [createMenuOpen, setCreateMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [showNewBoardPopup, setShowNewBoardPopup] = useState(false);

  const handleNewBoardClick = (e) => {
    setCreateMenuOpen(false);
    setShowNewBoardPopup(true);
  }

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
                  <li>New Task</li>
                  <li onClick={handleNewBoardClick}>New Board</li>
                </ul>
              </div>
              <div className="wrapper">
                <div className="userImage" onClick={() => setProfileMenuOpen((profileMenuOpen) => !profileMenuOpen)}>
                  <img
                    src={`http://${window.location.hostname}:1300/${user.profilePhoto}`}
                    alt="user"
                  />
                </div>
                <ul className={"menu-bar profile-menu-bar " + (profileMenuOpen ? "active" : "")}>
                  <li>Profile</li>
                  <li>Change Password</li>
                  <li>Logout</li>
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
     <BoardPopup showNewBoardPopup={showNewBoardPopup} setShowNewBoardPopup={setShowNewBoardPopup}/>
    </React.Fragment>
  );
}
