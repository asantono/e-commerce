import { UPDATE_CART, CHARGE_COMPLETE } from "../types";

const INITIAL_STATE = {
  cart: [],
  total: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: payload.cart,
        total: payload.total,
      };
    case CHARGE_COMPLETE:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default cartReducer;
