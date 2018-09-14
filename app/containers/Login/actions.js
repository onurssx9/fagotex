import { FORM_TYPE, USER_NAME } from './constants';

export function setFormType(data) {
  return {
    type: FORM_TYPE,
    data,
  };
}

export function setUserName(data) {
  return {
    type: USER_NAME,
    data,
  };
}
