import React from "react";
import * as api from "../api";
import { Link } from "react-router-dom";
import Navigation from "../component/Navigation";
import "../css/home.css";
import Button from "../component/Button";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  const history = useHistory();

  return (
    <div class="home">
      <Navigation />
      <div className="intro-text">
        <h3>Welcome To Flow</h3>
        <p>Organize your task with flow...</p>

        <Button
          className="cta-button"
          onClick={() => history.push("/dashboard")}
        >
          Go to Dashboard {">"}
        </Button>
      </div>
    </div>
  );
}
