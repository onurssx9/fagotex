import { put, call, take, fork } from 'redux-saga/effects';
import api from 'horizon/auth';
import { forkUsers } from './actions';

function* usersChannel(data) {
  try {
    yield put(forkUsers(data));
  } catch (error) {
    throw new Error(error);
  }
}

function* userListenerWatcher() {
  const userChannel = api.rsf.firestore.channel('users');
  while (true) {
    const data = yield take(userChannel);
    yield call(usersChannel, data.docs.map(x => x.data()));
  }
}

export default function* rootSaga() {
  yield fork(userListenerWatcher);
}
