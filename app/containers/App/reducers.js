import { fromJS } from 'immutable';
import {
  SET_CURRENT_USER,
  SET_LOGOUT_CURRENT_USER,
  SET_ALL_USERS,
  FORK_USERS,
} from './constants';

const userObject = fromJS({
  displayName: '',
  photoURL: '',
  email: '',
  comments: [],
  rating: [],
  hashtags: [],
});

// The initial state of the App
export const initialState = fromJS({
  login: false,
  userCards: [],
  currentUser: userObject,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return state.mergeDeep({ currentUser: action.user, login: true });
    case SET_LOGOUT_CURRENT_USER:
      return state.set('currentUser', userObject).set('login', false);
    case SET_ALL_USERS:
      return state.mergeDeep({ userCards: action.users });
    case FORK_USERS: {
      const newState = state.set('userCards', fromJS(action.users));
      const currentUser = action.users.find(
        x => x.email === state.getIn(['currentUser', 'email']),
      );
      if (currentUser && currentUser !== null) {
        return newState.setIn(['currentUser'], fromJS(currentUser));
      }
      return newState;
    }
    default:
      return state;
  }
}

export default globalReducer;
