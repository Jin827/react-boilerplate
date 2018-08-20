import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import Home from './src/components/Home';
import User from './src/components/user';
import FourOhFour from './src/components/FourOhFour';

const history = createHistory();

const Routes = () => (
  <Router history={history}>
    <div>
      <App />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user" exact component={User} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
