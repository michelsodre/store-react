import CartActionTypes from "./action-types";
const initialState = {
  products: [],
  productsTotalPrice: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === action.payload.id) {
              return { ...product, quantity: product.quantity + 1 };
            }
            return product;
          }),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
        productsTotalPrice: state.productsTotalPrice + action.payload.price,
      };
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        productsTotalPrice: state.productsTotalPrice - action.payload.price,
      };
    case CartActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        }),
        productsTotalPrice: state.productsTotalPrice + action.payload.price,
      };
    case CartActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        products: state.products
          .map((product) => {
            if (product.id === action.payload) {
              return { ...product, quantity: product.quantity - 1 };
            }
            return product;
          })
          .filter((product) => product.quantity > 0),
        productsTotalPrice: state.productsTotalPrice - action.payload.price,
      };
    default:
      return state;
  }
};
export default cartReducer;
