import { createSelector } from 'reselect';

const selectRoute = state => state.get('global');

const selectCurrentUser = () =>
  createSelector(selectRoute, substate => substate.get('currentUser').toJS());

const selectLoginStatus = () =>
  createSelector(selectRoute, substate => substate.get('login'));

const selectUserCards = () =>
  createSelector(selectRoute, substate => substate.get('userCards').toJS());

export { selectRoute, selectCurrentUser, selectLoginStatus, selectUserCards };
