import React, { Fragment } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderCenter from "./HeaderCenter";
import CheckUser from "../../util/CheckUser";

const Header = () => {
  return (
    <Fragment>
      <CheckUser />
      <div className="header">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>
    </Fragment>
  );
};

export default Header;
