import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const getLoginStatus = () =>
  createSelector(selectRoute, routeState => routeState.get('login'));

export { makeSelectLocation, getLoginStatus };
