import React from "react";
import logo from "../../imgs/logo.svg";

const HeaderLeft = () => {
  return (
    <div className="header__left">
      <img className="header__left--image" src={logo} alt="logo" />
    </div>
  );
};

export default HeaderLeft;
