import React from "react";
import { useSelector } from "react-redux";

const CartItems = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const itemList = cart.map((el) => (
    <div key={el.id}>
      <div className="cart-item">
        <div className="cart-item__text">
          <div className="cart-item__text--title">{el.title}</div>
          <div className="cart-item__text--author">{el.author}</div>
        </div>
        <div className="cart-item__price">{el.price}</div>
      </div>
    </div>
  ));
  return <div>{itemList}</div>;
};

export default CartItems;
