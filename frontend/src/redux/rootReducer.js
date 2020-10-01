import { combineReducers } from "redux";
import alertReducer from "./reducers/alertReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  alertReducer,
  userReducer,
});

export default rootReducer;
