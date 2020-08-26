import React from "react";
import HeaderRight from "./HeaderRight";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  // NOTES:
  // Logo navigate to home on click
  // Search functionality checks for products matching search
  // Cart needs to highlight when products are in it
  // Cart on click takes you to  cart page
  // Login/Signup button navigates to login/signup form
  return (
    <div className="header">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
};

export default Header;
