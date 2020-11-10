import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sale } from "../../dummyData/courses";
import { TiDeleteOutline } from "react-icons/ti";
import { removeFromCart } from "../../redux/actions/cartActions";
import CartTotal from "./CartTotal";

const CartItems = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(removeFromCart(cart, item));
  };
  const itemList = cart.map((el, i) => (
    <div key={el.id}>
      <div className="cart-item">
        <div className="cart-item__text">
          <div className="cart-item__text--title">{el.title}</div>
          <div className="cart-item__text--author">{el.author}</div>
        </div>
        <div className="cart-item__price">
          {el.saleOptIn ? el.price * sale : el.price}
        </div>
        <div className="cart-item__remove" onClick={() => removeItem(el)}>
          <TiDeleteOutline />
        </div>
      </div>
      {i + 1 === cart.length ? null : <div className="cart-item__underline" />}
    </div>
  ));
  return (
    <div className="cart-items__container">
      <div className="cart__title">Cart</div>
      <div className="cart-items">{itemList} </div>
      <div className="cart-items__break" />
      <CartTotal />
    </div>
  );
};

export default CartItems;
