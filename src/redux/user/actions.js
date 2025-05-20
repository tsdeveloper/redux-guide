import UserActionTypes from './action-types';

export const loginUser = (payload) => ({
  type: UserActionTypes.SET_URL_LOGIN,
  payload: {
    id: 10,
    name: 'Web Developer',
    email: 'developer@developer.com',
  },
});

export const logoutUser = () => ({
  type: UserActionTypes.SET_URL_LOGOUT,
});
