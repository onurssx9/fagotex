import { put, call, take, fork } from 'redux-saga/effects';
import { eventChannel, buffers } from 'redux-saga';
import firebase from '../../../server/horizon/Firebase';
import { updateUser } from './actions';

const db = firebase.auth().app.database();

function createEventChannel() {
  const listener = eventChannel(emit => {
    db.ref('users/').on('child_changed', data => emit(data.val()));
    return () => db.ref('users').off(listener);
  }, buffers.expanding(1));

  return listener;
}

function* usersListener(data) {
  try {
    yield put(
      updateUser({
        [data.googleId]: data,
      }),
    );
  } catch (error) {
    console.log(error);
  }
}

function* userListenerWatcher() {
  const listener = createEventChannel();
  while (true) {
    const data = yield take(listener);
    yield call(usersListener, data);
  }
}

export default function* rootSaga() {
  yield fork(userListenerWatcher);
}
