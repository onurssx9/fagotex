import { USER_OBJECT } from './constants';

export function setUserObject(data) {
  return {
    type: USER_OBJECT,
    data,
  };
}
