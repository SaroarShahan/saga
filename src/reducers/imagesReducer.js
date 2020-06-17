import { IMAGES } from './../constants';

const initState = {
  images: [],
};

const imagesReducer = (state = initState, action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return {
        ...state,
        images: [...state.images, ...action.playload],
      };
    default:
      return state;
  }
};

export default imagesReducer;
