import { all } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';

function* rootSaga() {
  yield all([imagesSaga()]);
}

export default rootSaga;
