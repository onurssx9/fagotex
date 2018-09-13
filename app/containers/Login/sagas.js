import { call, select, take } from 'redux-saga/effects';
import { getUserName } from '../HomePage/selectors';
import { DEFAULT } from './constants';
// import request from 'utils/request';
export function* getRepos() {
  // Select username from store
  yield select(getUserName);
  // try {
  // } catch (err) {
  //   console.log(err);
  // }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  while (true) {
    const action = yield take(DEFAULT);
    yield call(getRepos, action.data);
  }
}
