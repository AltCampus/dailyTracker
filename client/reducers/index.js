import { combineReducers } from "redux";
import currentUser from "./currentUser";
import dailyUpdates from "./dailyUpdates";

const rootReducer = combineReducers({
  currentUser, dailyUpdates
});

export default rootReducer;