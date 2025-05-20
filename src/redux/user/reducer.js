import UserActionTypes from './action-types';

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_URL_LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SET_URL_LOGOUT:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
