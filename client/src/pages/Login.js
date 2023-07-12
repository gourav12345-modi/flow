import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../api";
import Navigation from "../component/Navigation";
import "../css/signup.css";
import { loginUser, registerUser } from "../actions/userActions";
import { CLEAR_LOG_DATA } from "../constants";
import Button from "../component/Button";

export default function Login() {
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.userInfo);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_LOG_DATA });
    };
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };
  return message === "User LoggedIn" ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className="signup-page">
      <Navigation isAuth={false} />
      <div className="signupFormContainer">
        <h1>Login</h1>
        <p className={error ? "error" : "notVisible"}>
          {error ? error : "Welcome"}
        </p>

        <form>
          <div>
            <i className="far fa-envelope"></i>{" "}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            {showPassword ? (
              <i
                className="fas fa-unlock password-icon"
                onClick={() => setShowPassword(false)}
              ></i>
            ) : (
              <i
                className="fas fa-lock password-icon"
                onClick={() => setShowPassword(true)}
              ></i>
            )}
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <Button onClick={handleFormSubmit} disabled={loading}>
            {loading ? "Hangon..." : "Login"}{" "}
          </Button>
        </form>
        <h3 className="bottom-heading">
          Don't have account ? <Link to="/register">Signup</Link>{" "}
        </h3>
      </div>
    </div>
  );
}
