import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import alertReducer from "./reducers/alertReducer";

const rootReducer = combineReducers({
  userReducer,
  alertReducer,
});

export default rootReducer;
