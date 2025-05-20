import CartActionTypes from './action-types';

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const increaseItemToCart = (item) => ({
  type: CartActionTypes.INCREASE_ITEM_CART,
  payload: item,
});

export const decreaseItemToCart = (item) => ({
  type: CartActionTypes.DECREASE_ITEM_CART,
  payload: item,
});

export const clearItemToCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
