import React from "react";
import Authenticate from "./Authenticate";

const AuthComp = () => {
  return (
    <div className="auth-comp">
      <div className="auth-comp__left" />
      <div className="auth-comp__right">
        <Authenticate />
      </div>
    </div>
  );
};

export default AuthComp;
