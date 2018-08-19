import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import Reducers from './src/reducers';

const Store = createStore(
  Reducers,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      createLogger({
        predicate: () => process.env.NODE_ENV === 'development',
        collapsed: true,
      }),
    ),
  ),
);

module.exports = Store;
