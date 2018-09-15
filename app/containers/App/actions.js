import { LOGIN } from './constants';

export function changeLoginStatus(status) {
  return {
    type: LOGIN,
    status,
  };
}
