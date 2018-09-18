import { put, call, take, fork } from 'redux-saga/effects';
// import { eventChannel, buffers } from 'redux-saga';
// import firebase from '../../service/firebase/firebase';
import { updateUser } from './actions';

function createEventChannel() {
  console.log(312);
}

function* usersListener(data) {
  try {
  } catch (error) {
    console.log(error);
  }
}

function* userListenerWatcher() {
  // const listener = createEventChannel();
  // while (true) {
  //   const data = yield take(listener);
  //   yield call(usersListener, data);
  // }
}

export default function* rootSaga() {
  yield fork(userListenerWatcher);
}
