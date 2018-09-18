import { createSelector } from 'reselect';

const selectRoute = state => state.get('global');

export { selectRoute };
