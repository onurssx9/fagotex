import { call, select, take } from 'redux-saga/effects';
import { getUserName } from '../HomePage/selectors';
import { USER_NAME } from './constants';
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
    const action = yield take(USER_NAME);
    yield call(getRepos, action.data);
  }
}
