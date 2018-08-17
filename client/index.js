import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, browserHistory} from 'react-router-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore, analyticsService} from 'react-router-redux';
import Store from './Store';
import Routes from './Routes';

require('./styles/main.scss');

const root = document.createElement('div');
document.body.appendChild(root);

const history = syncHistoryWithStore(browserHistory, Store);

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter history={history} routes={Routes}>
      <Routes />
    </BrowserRouter>
  </Provider>,
  root,
);

// watch for navigation events
history.listen(location => analyticsService.track(location.pathname));

console.log(`Environment is ${process.env.NODE_ENV}`);
