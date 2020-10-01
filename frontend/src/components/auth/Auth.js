import React, { useState } from "react";
import logo from "../../imgs/logo.svg";
import { useDispatch } from "react-redux";
import { signupAction, loginAction } from "../../redux/actions/userActions";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitVal, setSubmitVal] = useState("Login");

  const dispatch = useDispatch();

  const optionsClick = (e) => {
    console.log(e.target.id);
    setSubmitVal(e.target.id);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    submitVal === "Login"
      ? dispatch(loginAction(email, password))
      : dispatch(signupAction(email, password));
  };

  // Classes
  let loginClass =
    submitVal === "Login"
      ? "auth__options--login auth__options--clicked"
      : "auth__options--login";

  let signupClass =
    submitVal === "Signup"
      ? "auth__options--login auth__options--clicked"
      : "auth__options--login";
  return (
    <div className="auth__container">
      <div className="auth__options">
        <div className={loginClass} id="Login" onClick={(e) => optionsClick(e)}>
          Login
        </div>
        <div
          className={signupClass}
          id="Signup"
          onClick={(e) => optionsClick(e)}
        >
          Signup
        </div>
      </div>
      <div className="auth">
        <img className="auth__header" src={logo} alt="logo" />
        <form className="auth__form" onSubmit={(e) => submit(e)}>
          <input
            className="auth__form--input"
            type="email"
            placeholder="email"
            onChange={(e) => updateEmail(e)}
          />
          <input
            className="auth__form--input"
            type="password"
            placeholder="password"
            minLength={8}
            onChange={(e) => updatePassword(e)}
          />
          <input
            className="auth__form--submit"
            type="submit"
            value={submitVal}
          />
        </form>
      </div>
    </div>
  );
};

export default Auth;
