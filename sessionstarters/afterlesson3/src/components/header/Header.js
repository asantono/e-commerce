import React from "react";
import HeaderRight from "./HeaderRight";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  return (
    <div className="header">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
};

export default Header;
