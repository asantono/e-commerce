import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  authReducer,
});
export default rootReducer;
