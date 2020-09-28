import API from "../../utils/API";
import { SIGN_UP, LOGIN, LOGOUT } from "../types";

export const signupUser = (email, password) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const body = { email, password };
    const res = await API.post("api/v1/auth/signup", body, config);
    dispatch({ type: SIGN_UP, payload: res.data.user });
    console.log(res);
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const body = { email, password };
    const res = await API.post("api/v1/auth/login", body, config);
    dispatch({ type: LOGIN, payload: res.data.user });
    console.log(res);
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await API.get("api/v1/auth/logout");
    dispatch({ type: LOGOUT });
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const getSecret = async () => {
  try {
    const res = await API.get("api/v1/auth/secretcontent");
    console.log(res);
  } catch (err) {
    console.log(err.response);
  }
};
