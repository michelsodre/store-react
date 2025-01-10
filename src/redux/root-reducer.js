import { combineReducers } from "redux";
//reducers
import userReducer from "./user/reducer";

// Add your reducers here
const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
