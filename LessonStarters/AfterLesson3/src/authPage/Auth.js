import React, { Fragment } from "react";

const Auth = () => {
  return (
    <div className="login-form">
      <form className="login-form__group">
        <img
          className="login-form__logo"
          src={require("../img/logo.svg")}
          alt="logo"
        />
        <input
          className="input__text"
          type="email"
          placeholder="email address"
          name="email"
          required
        />
        <input
          className="input__text"
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input className="input__submit" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Auth;
