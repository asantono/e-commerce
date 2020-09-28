import React from "react";
import { withRouter } from "react-router-dom";

const HeaderLogin = (props) => {
  const navLogin = () => {
    props.history.push("./auth");
  };
  return (
    <input
      className="header__right--login"
      type="submit"
      value="Login"
      onClick={() => navLogin()}
    />
  );
};

export default withRouter(HeaderLogin);
