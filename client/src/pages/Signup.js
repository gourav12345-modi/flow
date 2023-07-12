import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../api";
import Navigation from "../component/Navigation";
import "../css/signup.css";
import { registerUser } from "../actions/userActions";
import { CLEAR_LOG_DATA } from "../constants";
import Button from "../component/Button";

export default function Signup() {
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.userInfo);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_LOG_DATA });
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };
  return message === "User created" ? (
    <Redirect to="/login" />
  ) : (
    <div className="signup-page">
      <Navigation isAuth={false} />
      <div className="signupFormContainer">
        <h1>Signup</h1>
        <p className={error ? "error" : "notVisible"}>
          {error ? error : "Welcome"}
        </p>

        <form>
          <div>
            <i className="far fa-user"></i>{" "}
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              placeholder="Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
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
          <Button onClick={handleFormSubmit} disabled={loading ? true : false}>
            {loading ? "Hangon..." : "Signup"}{" "}
          </Button>
        </form>

        <h3 className="bottom-heading">
          Already have an account ? <Link to="/login">Signin</Link>{" "}
        </h3>
      </div>
    </div>
  );
}
