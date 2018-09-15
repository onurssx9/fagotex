import {} from 'reselect';
import { initialState } from './reducers';

const selectHome = state => state.get('home', initialState);

export { selectHome };
