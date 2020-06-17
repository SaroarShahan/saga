import { IMAGES } from './../constants';

const initState = {
  page: 1,
};

const pageReducer = (state = initState, action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
};

export default pageReducer;
