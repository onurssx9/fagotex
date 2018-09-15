import { createSelector } from 'reselect';

const selectRoute = state => state.get('global');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const getLoginStatus = () =>
  createSelector(selectRoute, routeState => routeState.get('login'));

const getUserObject = () =>
  createSelector(selectRoute, routeState =>
    routeState.get('userObject').toJS(),
  );

const getUserCards = () =>
  createSelector(selectRoute, routeState => routeState.get('userCards').toJS());

export { makeSelectLocation, getLoginStatus, getUserObject, getUserCards };
