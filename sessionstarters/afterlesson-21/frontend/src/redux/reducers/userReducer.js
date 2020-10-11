import { GET_USER, LOGOUT } from "../types";

const INITIAL_STATE = {
  user: {
    clearance: "",
    email: "",
    _id: "",
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
