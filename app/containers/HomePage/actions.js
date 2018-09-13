import { DEFAULT } from './constants';

export function setName(data) {
  return {
    type: DEFAULT,
    data,
  };
}
