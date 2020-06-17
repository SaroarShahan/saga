import { takeLatest, select, call, put } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setImages, setErrors } from '../actions';

const getPage = ({ pageReducer }) => pageReducer.page;

function* hanldeImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setErrors(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeLatest(IMAGES.LOAD, hanldeImagesLoad);
}
