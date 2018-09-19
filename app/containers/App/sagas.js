import { call, take, put, select } from 'redux-saga/effects';
import { SET_CURRENT_USER, GET_CURRENT_USER, GET_ALL_USERS } from './constants';
import { setCurrentUser, setAllUsers } from './actions';
import channels from './listeners';
import user from 'horizon/user';
import users from 'horizon/users';

function* createUserRequest(userObject) {
  try {
    yield call(user.create, userObject);
  } catch (error) {
    console.log(error);
  }
}

function* createUserRequestWatcher() {
  while (true) {
    const action = yield take(SET_CURRENT_USER);
    yield call(createUserRequest, action.user);
  }
}

function* getUser(email) {
  try {
    const currentUser = yield call(user.get, email);
    yield put(setCurrentUser(currentUser));
  } catch (error) {
    console.log(error);
  }
}

function* getUserWatcher() {
  while (true) {
    const action = yield take(GET_CURRENT_USER);
    yield call(getUser, action.email);
  }
}

function* getAllUsers() {
  try {
    const allUsers = yield call(users.get);
    yield put(setAllUsers(allUsers));
  } catch (error) {
    console.log(error);
  }
}

function* getAllUsersWatcher() {
  while (true) {
    yield take(GET_ALL_USERS);
    yield call(getAllUsers);
  }
}

function* rootSaga() {
  yield [
    createUserRequestWatcher,
    getUserWatcher,
    getAllUsersWatcher,
    channels,
  ].map(saga => call(saga));
}
export default rootSaga;
