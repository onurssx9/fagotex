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

import { LOGIN, USER_OBJECT, SET_USERS, UPDATE_USER } from './constants';

const comments = () => ({
  recieved: {},
  sent: {},
});

const userObject = fromJS({
  name: '',
  googleId: '',
  email: '',
  imageUrl: '',
  rating: 1,
  rank: 0,
  popularity: 0,
  comments: comments(),
});

// The initial state of the App
export const initialState = fromJS({
  login: false,
  userObject,
  userCards: {},
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('login', action.status);
    case USER_OBJECT:
      return state.mergeDeep({ userObject: action.data });
    case SET_USERS: {
      const newUserCards = {};
      Object.values(action.data).forEach(x => {
        newUserCards[x.googleId] = userObject.mergeDeep(x);
      });
      return state.mergeDeep({ userCards: newUserCards });
    }
    case UPDATE_USER:
      return state.mergeDeep({
        userCards: action.data,
      });
    default:
      return state;
  }
}

export default globalReducer;
