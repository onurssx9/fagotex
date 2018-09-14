import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectHome = state => state.get('home', initialState);

const getUserName = () =>
  createSelector(selectHome, homeState => homeState.get('userName'));

const getFormType = () =>
  createSelector(selectHome, homeState => homeState.get('formType'));

export { selectHome, getUserName, getFormType };
