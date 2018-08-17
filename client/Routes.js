import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './app';
import Home from './src/components/Home';
import User from './src/components/user';

const Routes = () => (
  <div>
    <App />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/user" component={User} />
    </Switch>
  </div>
);

export default Routes;
