import { GET_USER, LOGOUT, CHECK_USER_FAIL } from "../types";

const INITIAL_STATE = {
  user: {
    clearance: "",
    email: "",
    _id: "",
  },
  checkUser: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
        checkUser: false,
      };
    case LOGOUT:
      return INITIAL_STATE;

    case CHECK_USER_FAIL:
      return {
        ...state,
        checkUser: false,
      };
    default:
      return state;
  }
};

export default userReducer;
