import { GET_USER } from "../types";
import API from "../../utils/API";
import { setAlert } from "./alertActions";

const options = { headers: { "Content-Type": "application/json" } };

export const signupAction = (email, password) => async (dispatch) => {
  const url = "/auth/signup";
  const body = { email, password };
  try {
    const res = await API.post(url, body, options);
    dispatch({ type: GET_USER, payload: res.data.user });
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(setAlert(err.response.data.message));
  }
};

export const loginAction = (email, password) => async (dispatch) => {
  const url = "/auth/login";
  const body = { email, password };
  try {
    const res = await API.post(url, body, options);
    dispatch({ type: GET_USER, payload: res.data.user });
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(setAlert(err.response.data.message));
  }
};
