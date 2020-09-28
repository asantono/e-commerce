import React, { Fragment, useState } from "react";

const Auth = () => {
  const [register, setRegister] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Button Clicked!!!");
  };

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //CLASSES
  const registerClass = !register
    ? "form-switcher__option"
    : "form-switcher__option form-switcher__option--selected";

  const loginClass = register
    ? "form-switcher__option"
    : "form-switcher__option form-switcher__option--selected";

  const buttonText = register ? "Signup" : "Login";

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
        <form className="login-form__group" onSubmit={(e) => onSubmit(e)}>
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
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <input
            className="input__text"
            type="password"
            placeholder="password"
            name="password"
            minLength="8"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
          <input className="input__submit" type="submit" value={buttonText} />
        </form>
      </div>
    </Fragment>
  );
};

export default Auth;
