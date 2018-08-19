import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
// import {routerMiddleware} from 'react-router-redux';
// import createBrowserHistory from 'history/createBrowserHistory';

import Reducers from './src/reducers';
// const routingMiddleware = routerMiddleware(createBrowserHistory());

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
