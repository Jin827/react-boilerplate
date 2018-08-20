import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import Store from './Store';
import App from './App';
import Home from './src/components/Home';
import User from './src/components/user';
import FourOhFour from './src/components/FourOhFour';

const history = syncHistoryWithStore(createBrowserHistory(), Store);

const Routes = () => (
  <BrowserRouter history={history}>
    <div>
      <App />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user" exact component={User} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
