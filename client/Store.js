import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line
import mainReducer from './src/reducers';

const middleWare = [];

middleWare.push(thunkMiddleware);

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
  collapsed: true,
});

middleWare.push(loggerMiddleware);

const Store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(...middleWare)),
);

module.exports = Store;
