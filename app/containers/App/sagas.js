import { call, take, put, select } from 'redux-saga/effects';
import {
  USER_OBJECT,
  GET_USER_BY_ID,
  UPDATE_USER,
  GET_USERS,
  ADD_COMMENT,
} from './constants';
import { setUserObject, setUsers } from './actions';
import request from '../../utils/request';
import { getUserObject } from './selectors';

const API_ENDPOINT = '/api/';

const horizon = {
  user: {
    get: param => `user/userId=${param}`,
    login: () => 'user/login/',
    update: () => 'user/login/update',
    addComment: () => 'user/addComment',
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
    yield take(USER_OBJECT);
    const data = yield select(getUserObject());
    yield call(createUserRequest, data);
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

function* getUsers() {
  try {
    const requestURL = API_ENDPOINT + horizon.users.get();
    const response = yield call(request, requestURL);
    if (response.status) {
      yield put(setUsers(response.users));
    }
  } catch (error) {
    console.log(error);
  }
}

function* getUsersWatcher() {
  while (true) {
    yield take(GET_USERS);
    yield call(getUsers);
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

function* addCommentRequest(comment) {
  try {
    const requestURL = API_ENDPOINT + horizon.user.addComment();
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = yield call(request, requestURL, requestOptions);
    if (response.status) {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}

function* addCommentRequestWatcher() {
  while (true) {
    const action = yield take(ADD_COMMENT);
    const senderId = (yield select(getUserObject())).googleId || 'anonym';
    const addCommentPayload = {
      text: action.data.text,
      recieverId: action.data.userId,
      senderId,
    };
    yield call(addCommentRequest, addCommentPayload);
  }
}

function* rootSaga() {
  yield [
    createUserRequestWatcher,
    getUserByIDRequestWatcher,
    updateUserRequestWatcher,
    getUsersWatcher,
    addCommentRequestWatcher,
  ].map(saga => call(saga));
}
export default rootSaga;
