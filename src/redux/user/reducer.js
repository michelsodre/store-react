const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  if (action.type === "user/login") {
    return {
      ...state,
      user: action.payload,
    };
  }
  return state;
};

export default userReducer;
