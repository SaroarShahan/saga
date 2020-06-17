import { IMAGES } from './../constants';

const initState = {
  isLoading: false,
};

const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case IMAGES.LOAD_SUCCESS:
    case IMAGES.LOAD_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
