export const selectCartProducts = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
};
