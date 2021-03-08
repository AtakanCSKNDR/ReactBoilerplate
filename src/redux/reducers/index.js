import { combineReducers } from "redux";
import userReducer from "./modules/user/userReducer";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
