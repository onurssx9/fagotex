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

import { USER_NAME, FORM_TYPE } from './constants';

// The initial state of the App
export const initialState = fromJS({
  username: '',
  formType: 'login',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case USER_NAME:
      return state.set('userName', action.data);
    case FORM_TYPE:
      return state.set('formType', action.data);
    default:
      return state;
  }
}

export default homeReducer;
