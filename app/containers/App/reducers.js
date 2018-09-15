/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { LOGIN } from './constants';

// The initial state of the App
export const initialState = fromJS({
  login: false,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('login', action.status);
    default:
      return state;
  }
}

export default globalReducer;
