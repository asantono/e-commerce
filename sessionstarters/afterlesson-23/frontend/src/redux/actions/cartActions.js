import { setAlert } from "./alertActions";
import { sale } from "../../dummyData/courses";
import { UPDATE_CART } from "../types";

const cartTotal = (cart) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].saleOptIn) total += cart[i].price * sale;
    else total += cart[i].price;
  }
  return total;
};

export const addToCart = (cart, item) => (dispatch) => {
  const newCart = [...cart, item];
  const newTotal = cartTotal(newCart);
  dispatch({ type: UPDATE_CART, payload: { cart: newCart, total: newTotal } });
  dispatch(setAlert("Added to cart", 3000));
};
