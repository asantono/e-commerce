import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import alertReducer from "./reducers/alertReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  userReducer,
  alertReducer,
  cartReducer,
});

export default rootReducer;
