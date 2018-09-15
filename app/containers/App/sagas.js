import { all, call, take, put } from 'redux-saga/effects';
import { USER_OBJECT, GET_USER_BY_ID } from './constants';
import { setUserObject } from './actions';
import request from '../../utils/request';

const horizon = (type, method, param) =>
  ({
    user: {
      get: () => `user/userId=${param}`,
      create: () => 'user/',
    },
    users: 'users/',
  }[type](method));

function* createUserRequest(userObject) {
  try {
    const requestOptions = {
      url: horizon('user', 'create'),
      method: 'POST',
      body: JSON.stringify(userObject),
    };
    const response = yield call(request, requestOptions);
    if (response.status) {
      console.log('create method succeed');
    }
  } catch (error) {
    console.log(error);
  }
}

function* createUserRequestWatcher() {
  while (true) {
    const action = yield take(USER_OBJECT);
    console.log(123);
    yield call(createUserRequest, action.data);
  }
}

function* getUserByIDRequest(userId) {
  try {
    const requestOptions = {
      url: horizon('user', 'get', userId),
      method: 'GET',
    };
    const response = yield call(request, requestOptions);
    if (response.status) {
      yield put(setUserObject, response.userObject);
    }
  } catch (error) {
    console.log(error);
  }
}

function* getUserByIDRequestWatcher() {
  while (true) {
    const action = yield take(GET_USER_BY_ID);
    yield call(getUserByIDRequest, action.userId);
  }
}

function* rootSaga() {
  console.log(333);
  yield all([createUserRequestWatcher, getUserByIDRequestWatcher]);
}
export default rootSaga;
