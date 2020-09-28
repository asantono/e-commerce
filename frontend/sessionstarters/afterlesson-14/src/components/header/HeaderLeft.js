import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../../imgs/logo.svg";

const HeaderLeft = (props) => {
  const navHome = () => {
    props.history.push("/");
  };
  return (
    <div className="header__left">
      <img
        className="header__left--image"
        src={logo}
        alt="logo"
        onClick={() => navHome()}
      />
    </div>
  );
};

export default withRouter(HeaderLeft);
