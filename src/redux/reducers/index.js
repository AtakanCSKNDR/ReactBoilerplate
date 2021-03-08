import { combineReducers } from "redux";
import userListReducer from "./modules/user/userListReducer";

const rootReducer = combineReducers({
  userListReducer,
});

export default rootReducer;
