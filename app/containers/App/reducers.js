import { fromJS } from 'immutable';
import {} from './constants';

// The initial state of the App
export const initialState = fromJS({
  login: false,
  userCards: {},
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default globalReducer;
