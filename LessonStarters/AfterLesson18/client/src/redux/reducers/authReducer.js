import { SIGN_UP, LOGIN, LOGOUT } from "../types";

const INITIAL_STATE = {
  user: {},
  id: "",
  email: "",
  clearance: "",
  loggedOn: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP:
      return {
        ...state,
        user: payload,
        loggedOn: true,
        id: payload._id,
        email: payload.email,
        clearance: payload.clearance,
      };
    case LOGIN:
      return {
        ...state,
        user: payload,
        loggedOn: true,
        id: payload._id,
        email: payload.email,
        clearance: payload.clearance,
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default authReducer;
