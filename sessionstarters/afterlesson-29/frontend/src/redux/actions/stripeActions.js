import { setAlert } from "./alertActions";
import API from "../../util/API";
import { CHARGE_COMPLETE } from "../types";

export const singleCharge = (token, total, description, cart) => async (
  dispatch
) => {
  try {
    const options = { headers: { "Content-Type": "application/json" } };
    const body = { token, total, description, cart };
    const url = "/stripe/singlecharge";
    let res = await API.post(url, body, options);
    dispatch({ type: CHARGE_COMPLETE });
    console.log(res);
  } catch (err) {
    dispatch(setAlert(err.response.data.message));
    console.log(err.response);
  }
};

export const saveCardAndCharge = (token, total, description, cart) => async (
  dispatch
) => {
  try {
    const options = { headers: { "Content-Type": "application/json" } };
    const body = { token, total, description, cart };
    const url = "/stripe/savecardandcharge";
    let res = await API.post(url, body, options);
    dispatch({ type: CHARGE_COMPLETE });
    console.log(res);
  } catch (err) {
    dispatch(setAlert(err.response.data.message));
    console.log(err.response);
  }
};
