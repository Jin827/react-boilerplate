import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import App from './App';
import Spinner from './src/components/Spinner';

const Loading = () => <Spinner />;

const Home = Loadable({
  loader: () => import('./src/components/Home'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./src/components/User'),
  loading: Loading,
});

const NoMatch = Loadable({
  loader: () => import('./src/components/NoMatch'),
  loading: Loading,
});

const routes = () => (
  <div>
    <App />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/user" component={User} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

const Routes = module.hot ? hot(module)(routes) : routes;
export default Routes;
