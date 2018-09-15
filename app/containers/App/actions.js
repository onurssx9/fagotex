import { LOGIN, USER_OBJECT, GET_USER_BY_ID, UPDATE_USER } from './constants';

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
