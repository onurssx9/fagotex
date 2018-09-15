import { call, take, put } from 'redux-saga/effects';
import { USER_OBJECT, GET_USER_BY_ID, UPDATE_USER } from './constants';
import { setUserObject } from './actions';
import request from '../../utils/request';

const API_ENDPOINT = '/api/';

const horizon = {
  user: {
    get: param => `user/userId=${param}`,
    login: () => 'user/login/',
    update: () => 'user/login/',
  },
  users: {
    get: () => 'users/',
    create: () => 'users/',
  },
};

function* createUserRequest(userObject) {
  try {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(userObject),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const requestURL = API_ENDPOINT + horizon.user.login();
    const response = yield call(request, requestURL, requestOptions);
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
    yield call(createUserRequest, action.data);
  }
}

function* getUserByIDRequest(userId) {
  try {
    const requestURL = API_ENDPOINT + horizon.user.get(userId);
    const response = yield call(request, requestURL);
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

function* updateUserRequest(userObject) {
  try {
    const requestURL = API_ENDPOINT + horizon.user.update();
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(userObject),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = yield call(request, requestURL, requestOptions);
    if (response.status) {
      yield put(setUserObject, response.userObject);
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateUserRequestWatcher() {
  while (true) {
    const action = yield take(UPDATE_USER);
    yield call(updateUserRequest, action.data);
  }
}

function* rootSaga() {
  yield [
    createUserRequestWatcher,
    getUserByIDRequestWatcher,
    updateUserRequestWatcher,
  ].map(saga => call(saga));
}
export default rootSaga;
