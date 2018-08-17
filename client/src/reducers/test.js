import * as actionTypes from '../actions/actionTypes';

const Test = (state = {counting: 1}, action) => {
  switch (action.type) {
    case actionTypes.COUNT: {
      return {
        ...state,
        counting: this.state.counting + 1,
      };
    }
    default:
      return state;
  }
};

export default Test;
