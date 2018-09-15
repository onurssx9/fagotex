import { LOGIN, USER_OBJECT } from './constants';

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
