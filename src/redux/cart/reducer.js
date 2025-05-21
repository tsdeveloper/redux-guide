import CartActionTypes from './action-types';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      const existingItem = state.cartItems.some(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case CartActionTypes.INCREASE_ITEM_CART:
      const existingItemIncrease = state.cartItems.some(
        (item) => item.id === action.payload.id,
      );
      if (existingItemIncrease) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    case CartActionTypes.DECREASE_ITEM_CART:
      const existingItemDecrease = state.cartItems.some(
        (item) => item.id === action.payload.id && item.quantity > 0,
      );
      if (existingItemDecrease) {
        return {
          ...state,
          cartItems: state.cartItems
            .map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        };
      }
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter(
            (item) => item.id !== action.payload.id && item.quantity > 0,
          ),
        ],
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (itemToRemove) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id,
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    default:
      return state;
  }
};

export default cartReducer;
