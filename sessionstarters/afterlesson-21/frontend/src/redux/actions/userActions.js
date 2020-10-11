import { GET_USER, LOGOUT } from "../types";
import API from "../../util/API";
import { setAlert } from "./alertActions";

const options = { headers: { "Content-Type": "application/json" } };

export const signupAction = (email, password) => async (dispatch) => {
  const body = { email, password };
  const url = "/auth/signup";
  try {
    const res = await API.post(url, body, options);
    dispatch({ type: GET_USER, payload: res.data.user });
    console.log(res.data.user);
  } catch (err) {
    dispatch(setAlert(err.response.data.message));
  }
};

export const loginAction = (email, password) => async (dispatch) => {
  console.log("LOGIN");
  const body = { email, password };
  const url = "/auth/login";
  try {
    const res = await API.post(url, body, options);
    dispatch({ type: GET_USER, payload: res.data.user });
    console.log(res.data.user);
  } catch (err) {
    dispatch(setAlert(err.response.data.message));
  }
};

export const logoutAction = () => async (dispatch) => {
  const url = "/auth/logout";
  try {
    await API.get(url);
    dispatch({ type: LOGOUT });
  } catch (err) {
    dispatch(setAlert(err.response.data.message));
  }
};
