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

import { LOGIN, USER_OBJECT, SET_USERS } from './constants';

const comment = (text, userId) => ({
  text,
  userId,
});

const comments = () => ({
  recieved: [comment('', '')],
  sent: [comment('', '')],
});

// The initial state of the App
export const initialState = fromJS({
  login: false,
  userObject: {
    name: '',
    googleId: '',
    email: '',
    imageUrl: '',
    rating: 1,
    rank: 0,
    popularity: 0,
    comments: comments(),
  },
  userCards: {},
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('login', action.status);
    case USER_OBJECT:
      return state.mergeDeep({ userObject: action.data });
    case SET_USERS:
      return state.mergeDeep({ userCards: action.data });
    default:
      return state;
  }
}

export default globalReducer;
