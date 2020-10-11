import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import HeaderLogin from "./HeaderLogin";
import HeaderMenu from "./HeaderMenu";

const HeaderRight = () => {
  const { clearance } = useSelector((state) => state.userReducer.user);
  return (
    <div className="header__right">
      <AiOutlineShoppingCart className="header__right--cart" />
      {clearance ? <HeaderMenu /> : <HeaderLogin />}
    </div>
  );
};

export default HeaderRight;
