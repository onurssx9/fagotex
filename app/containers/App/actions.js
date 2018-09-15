import {
  LOGIN,
  USER_OBJECT,
  GET_USER_BY_ID,
  UPDATE_USER,
  SET_USERS,
  GET_USERS,
} from './constants';

export function changeLoginStatus(status) {
  return {
    type: LOGIN,
    status,
  };
}

export function setUserObject(data) {
  return {
    type: USER_OBJECT,
    data,
  };
}

export function setUsers(data) {
  return {
    type: SET_USERS,
    data,
  };
}

export function getUsers() {
  return {
    type: GET_USERS,
  };
}

export function updateUser(data) {
  return {
    type: UPDATE_USER,
    data,
  };
}

export function getUserById(userId) {
  return {
    type: GET_USER_BY_ID,
    userId,
  };
}
