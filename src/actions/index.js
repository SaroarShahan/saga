import { IMAGES } from './../constants';

const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  playload: images,
});

const setErrors = error => ({
  type: IMAGES.LOAD_FAIL,
  playload: error,
});

export { loadImages, setImages, setErrors };
