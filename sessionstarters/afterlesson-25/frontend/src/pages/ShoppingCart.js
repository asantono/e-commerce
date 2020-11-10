import React, { Fragment } from "react";
import Cart from "../components/cart/Cart";
import StripePay from "../components/checkout/StripePay";

const ShoppingCart = () => {
  return (
    <Fragment>
      <Cart />
      <StripePay />
    </Fragment>
  );
};

export default ShoppingCart;
