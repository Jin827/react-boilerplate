import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import App from './App';
import Home from './src/components/Home';
import User from './src/components/user';
import NoMatch from './src/components/NoMatch';

const routes = () => (
  <div>
    <App />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user" exact component={User} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

const Routes = module.hot ? hot(module)(routes) : routes;
export default Routes;
