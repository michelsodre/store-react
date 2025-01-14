import { combineReducers } from "redux";
//reducers
import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";

// Add your reducers here
const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});

export default rootReducer;
