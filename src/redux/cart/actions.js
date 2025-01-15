import CartActionTypes from "./action-types";

export const addToCart = (payload) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload) => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload,
});

export const increaseQuantity = (payload) => ({
  type: CartActionTypes.INCREASE_QUANTITY,
  payload,
});

export const decreaseQuantity = (payload) => ({
  type: CartActionTypes.DECREASE_QUANTITY,
  payload,
});
