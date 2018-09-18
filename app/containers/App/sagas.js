import { call, take, put, select } from 'redux-saga/effects';
import {
  USER_OBJECT,
  GET_USER_BY_ID,
  GET_USERS,
  ADD_COMMENT,
  REMOVE_LOGIN_DATA,
  DELETE_COMMENT,
} from './constants';
import { setUserObject, setUsers, setLoginData } from './actions';
import request from '../../utils/request';
import { getUserObject } from './selectors';
import listeners from './listeners';

const API_ENDPOINT = '/api/';

const horizon = {
  user: {
    get: param => `user/userId=${param}`,
    login: () => 'user/login/',
    update: () => 'user/login/update',
    addComment: () => 'user/addComment',
    logout: () => 'user/logout',
    deletecomment: () => 'user/deleteComment',
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
      yield put(setLoginData(response.userObject));
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
    yield call(request, requestURL, requestOptions);
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

function* logoutRequest(comment) {
  try {
    const requestURL = API_ENDPOINT + horizon.user.logout();
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    yield call(request, requestURL, requestOptions);
  } catch (error) {
    console.log(error);
  }
}

function* logoutRequestWatcher() {
  while (true) {
    const action = yield take(REMOVE_LOGIN_DATA);
    const requestPaylod = {
      userId: action.data.userId,
      commentId: action.data.commentId,
    };
    yield call(logoutRequest, requestPaylod);
  }
}

function* deleteCommentRequest(comment) {
  try {
    const requestURL = API_ENDPOINT + horizon.user.deletecomment();
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    yield call(request, requestURL, requestOptions);
  } catch (error) {
    console.log(error);
  }
}

function* deleteCommentRequestWatcher() {
  while (true) {
    const action = yield take(DELETE_COMMENT);
    const requestPayload = {
      userId: action.data.userId,
      commentId: action.data.commentId,
    };

    yield call(deleteCommentRequest, requestPayload);
  }
}

function* rootSaga() {
  yield [
    createUserRequestWatcher,
    getUserByIDRequestWatcher,
    getUsersWatcher,
    addCommentRequestWatcher,
    listeners,
    logoutRequestWatcher,
    deleteCommentRequestWatcher,
  ].map(saga => call(saga));
}
export default rootSaga;
