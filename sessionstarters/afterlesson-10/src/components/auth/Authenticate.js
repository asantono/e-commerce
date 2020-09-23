import React from "react";
import logo from "../../imgs/logo.svg";

const Authenticate = () => {
  return (
    <div className="auth__container">
      <div className="auth__options">
        <div className="auth__options--login auth__options--clicked" id="Login">
          Login
        </div>
        <div className="auth__options--login" id="Signup">
          Signup
        </div>
      </div>
      <div className="auth">
        <img className="auth__header" src={logo} alt="logo" />
        <form className="auth__form">
          <input
            className="auth__form--input"
            type="text"
            placeholder="email"
          />
          <input
            className="auth__form--input"
            type="password"
            placeholder="password"
          />
          <input className="auth__form--submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Authenticate;
