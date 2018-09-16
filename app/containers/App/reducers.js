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

import {
  LOGIN,
  USER_OBJECT,
  SET_USERS,
  UPDATE_USER,
  SET_LOGIN_DATA,
  REMOVE_LOGIN_DATA,
} from './constants';

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
  sessionId: localStorage.getItem('user-session') || '',
});

// The initial state of the App
export const initialState = fromJS({
  login: localStorage.getItem('user-session') !== null,
  userObject,
  userCards: {},
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('login', action.status);
    case USER_OBJECT:
    case SET_LOGIN_DATA:
      return state.mergeDeep({
        userObject: action.data,
        login: localStorage.getItem('user-session') !== null,
      });
    case SET_USERS: {
      const newUserCards = {};
      Object.values(action.data).forEach(card => {
        newUserCards[card.googleId] = userObject.mergeDeep(card);
      });
      return state.mergeDeep({
        userCards: newUserCards,
        userObject: newUserCards[state.getIn(['userObject', 'googleId'])] || {},
      });
    }
    case UPDATE_USER:
      return state.mergeDeep({
        userCards: action.data,
        userObject: action.data[state.getIn(['userObject', 'googleId'])] || {},
      });
    case REMOVE_LOGIN_DATA:
      return state.set('userObject', userObject);
    default:
      return state;
  }
}

export default globalReducer;
