import * as actionTypes from '../actions/actionTypes';

const initialState = {
  counting: false,
};
const Test = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNT: {
      return {
        state,
        counting: !state.counting,
      };
    }
    default:
      return state;
  }
};

export default Test;
