import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
  loadingReducer,
  imagesReducer,
  errorReducer,
  pageReducer,
});

export default rootReducer;
