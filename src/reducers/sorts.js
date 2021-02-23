import { SET_CREATED_AT_SORT } from '../constants';

const sorts = (state = { sortCreatedAt: '' }, { type, payload }) => {
  switch (type) {
    case SET_CREATED_AT_SORT:
      return { ...state, sortCreatedAt: payload.type };
    default:
      return state;
  }
};

export default sorts;
