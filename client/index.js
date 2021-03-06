import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Store from './Store';
import Routes from './Routes';

require('./styles/main.scss');

const root = document.createElement('div');
document.body.appendChild(root);
const history = createHistory();

render(
  <Provider store={Store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  root,
);
