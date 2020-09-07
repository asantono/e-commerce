import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <div className="header">
      <HeaderLeft />
      <div className="header__center">Center</div>
      <HeaderRight />
    </div>
  );
};

export default Header;
