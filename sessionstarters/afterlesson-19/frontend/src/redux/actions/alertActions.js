import { SET_ALERT, REMOVE_ALERT } from "../types";
import { v4 as uuid } from "uuid";

export const setAlert = (str, timeout = 7000) => (dispatch) => {
  const newID = uuid();
  dispatch({ type: SET_ALERT, payload: { id: newID, msg: str } });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: newID }), timeout);
};
