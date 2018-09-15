import { createSelector } from 'reselect';

const selectRoute = state => state.get('global');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const getLoginStatus = () =>
  createSelector(selectRoute, routeState => routeState.get('login'));

const getUserObject = () =>
  createSelector(selectRoute, routeState => routeState.get('userObject'));

export { makeSelectLocation, getLoginStatus, getUserObject };
