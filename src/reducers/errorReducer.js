import { IMAGES } from './../constants';

const initState = {
  error: null,
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case IMAGES.LOAD_FAIL:
      return {
        ...state,
        error: action.playload,
      };
    case IMAGES.LOAD:
    case IMAGES.LOAD_SUCCESS:
      return {
        error: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
