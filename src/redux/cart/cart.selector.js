export const selectProductsCount = (rootReducer) => {
  console.log('rootReducer:', rootReducer.cartReducer);

  if (!rootReducer.cartReducer?.cartItems) {
    return 0;
  }
  return rootReducer.cartReducer.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
};

export const selectProductsTotaPrice = (rootReducer) => {
  return rootReducer.cartReducer.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
};
