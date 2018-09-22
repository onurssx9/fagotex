import { call } from 'redux-saga/effects';
export function* getRepos() {}

export default function* githubData() {
  yield call(getRepos);
}
