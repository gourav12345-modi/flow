import React from "react";
import "../css/button.css";

function Button({ className, children, onClick, disabled }) {
  return (
    <button
      className={"button " + (className ? className : "")}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
