import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import App from './App';
import AsyncRoute from './AsyncRoute';
import NoMatch from './src/components/NoMatch';

const routes = () => (
  <div>
    <App />
    <Switch>
      <Route
        exact
        path="/"
        component={props => (
          <AsyncRoute
            props={props}
            loadingPromise={import('./src/components/Home')}
          />
        )}
      />
      <Route
        exact
        path="/user"
        component={props => (
          <AsyncRoute
            props={props}
            loadingPromise={import('./src/components/user')}
          />
        )}
      />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

const Routes = module.hot ? hot(module)(routes) : routes;
export default Routes;
