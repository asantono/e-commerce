import React from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const { total } = useSelector((state) => state.cartReducer);
  return <div className="cart-items__total">Total: $ {total}</div>;
};

export default CartTotal;
