import { call, take, put, select } from 'redux-saga/effects';
import {} from './constants';
import {} from './actions';

import {} from './selectors';

function* createUserRequest(userObject) {
  try {
    console.log(userObject);
  } catch (error) {
    console.log(error);
  }
}

function* createUserRequestWatcher() {}

function* rootSaga() {
  yield [createUserRequestWatcher].map(saga => call(saga));
}
export default rootSaga;
