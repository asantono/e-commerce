import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HeaderLogin from "./HeaderLogin";

const HeaderRight = () => {
  return (
    <div className="header__right">
      <AiOutlineShoppingCart className="header__right--cart" />
      <HeaderLogin />
    </div>
  );
};

export default HeaderRight;
