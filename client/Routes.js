import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import App from './App';
import Home from './src/components/Home';
import User from './src/components/user';

const Routes = () => (
  <div>
    <App />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/user" component={User} exact />
    </Switch>
  </div>
);

export default withRouter(Routes);
