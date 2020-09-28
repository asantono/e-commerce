import React from "react";
import { withRouter } from "react-router-dom";

const HeaderLogin = (props) => {
  return <input className="header__right--login" type="submit" value="Login" />;
};

export default withRouter(HeaderLogin);
