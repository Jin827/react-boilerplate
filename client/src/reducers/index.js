import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
/* eslint import/no-self-import:0 */
import * as reducers from '.';

export default combineReducers({
  reducers,
  routing: routerReducer,
});
