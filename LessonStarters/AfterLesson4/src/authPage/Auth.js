import React, { Fragment, useState } from "react";

const Auth = () => {
  const [register, setRegister] = useState(false);

  //CLASSES
  const registerClass = !register
    ? "form-switcher__option"
    : "form-switcher__option form-switcher__option--selected";

  const loginClass = register
    ? "form-switcher__option"
    : "form-switcher__option form-switcher__option--selected";

  return (
    <Fragment>
      <div className="form-switcher">
        <div className={loginClass} onClick={(e) => setRegister(false)}>
          Login
        </div>
        <div className={registerClass} onClick={(e) => setRegister(true)}>
          Signup
        </div>
      </div>
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
    </Fragment>
  );
};

export default Auth;
