import { call, take, put } from 'redux-saga/effects';
import { USER_OBJECT, GET_USER_BY_ID } from './constants';
import { setUserObject } from './actions';
import request from '../../utils/request';

const API_ENDPOINT = '/api/';

const horizon = {
  user: {
    get: param => `user/userId=${param}`,
    create: () => 'user/',
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
    const requestURL = API_ENDPOINT + horizon.user.create();
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

function* rootSaga() {
  yield [createUserRequestWatcher, getUserByIDRequestWatcher].map(saga =>
    call(saga),
  );
}
export default rootSaga;
