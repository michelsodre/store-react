import UserActionTypes from "./action-types";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  if (action.type === UserActionTypes.LOGIN) {
    return {
      ...state,
      user: action.payload,
    };
  }
  return state;
};

export default userReducer;
