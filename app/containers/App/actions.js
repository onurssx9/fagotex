import {
  SET_CURRENT_USER,
  SET_LOGOUT_CURRENT_USER,
  GET_CURRENT_USER,
  GET_ALL_USERS,
  SET_ALL_USERS,
  FORK_USERS,
} from './constants';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const getCurrentUser = email => ({
  type: GET_CURRENT_USER,
  email,
});

export const getAllUsers = () => ({
  type: GET_ALL_USERS,
});

export const forkUsers = users => ({
  type: FORK_USERS,
  users,
});

export const setAllUsers = users => ({
  type: SET_ALL_USERS,
  users,
});

export const setLogoutCurrentUser = () => ({
  type: SET_LOGOUT_CURRENT_USER,
});
