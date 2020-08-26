import React from "react";
import Auth from "./Auth";

const AuthComp = () => {
  return (
    <div className="auth-comp">
      <div className="auth-comp__left"></div>
      <div className="auth-comp__right">
        <Auth />
      </div>
    </div>
  );
};

export default AuthComp;
