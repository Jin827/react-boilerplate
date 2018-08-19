import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { createBrowserHistory } from 'history';
import Store from './Store';
import Routes from './Routes';

require('./styles/main.scss');

const root = document.createElement('div');
document.body.appendChild(root);

const history = syncHistoryWithStore(createBrowserHistory(), Store);

ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  root,
);
