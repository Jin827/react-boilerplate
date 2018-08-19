import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Test from './test';

export default combineReducers({
  test: Test,
  routing: routerReducer,
});
