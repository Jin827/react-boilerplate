import * as types from '../actions/actionTypes';

const initialState = {
  counting: 0,
};
const Test = (state = initialState, action) => {
  switch (action.type) {
    case types.COUNT: {
      return {
        ...state,
        counting: state.counting + 1,
      };
    }
    default:
      return state;
  }
};

export default Test;
