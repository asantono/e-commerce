import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../../imgs/logo.svg";

const HeaderLeft = (props) => {
  return (
    <div className="header__left">
      <img className="header__left--image" src={logo} alt="logo" />
    </div>
  );
};

export default withRouter(HeaderLeft);
