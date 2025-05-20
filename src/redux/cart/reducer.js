import CartActionTypes from './action-types';

const initialState = {
  cartItems: [],
  totalAmount: 0,
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
          totalAmount: state.totalAmount + action.payload.price,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        totalAmount: state.totalAmount + action.payload.price,
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
          totalAmount: state.totalAmount + action.payload.price,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        totalAmount: state.totalAmount + action.payload.price,
      };
    case CartActionTypes.DECREASE_ITEM_CART:
      const existingItemDecrease = state.cartItems.some(
        (item) => item.id === action.payload.id,
      );
      if (existingItemDecrease) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
          totalAmount: state.totalAmount - action.payload.price,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        totalAmount: state.totalAmount + action.payload.price,
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      console.log('Item to remove:', itemToRemove);
      if (itemToRemove) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id,
          ),
          totalAmount:
            state.totalAmount - itemToRemove.price * itemToRemove.quantity,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        totalAmount: state.totalAmount,
      };
    default:
      return state;
  }
};

export default cartReducer;
