import React from "react";
import CartTotal from "./CartTotal";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__title">Cart</div>
      <CartItems />
      <CartTotal />
    </div>
  );
};

export default Cart;
