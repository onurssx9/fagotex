import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectHome = state => state.get('home', initialState);

const getUserObject = () =>
  createSelector(selectHome, homeState => homeState.get('userObject'));

export { selectHome, getUserObject };
