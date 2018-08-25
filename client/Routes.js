import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import App from './App';

const Spinner = () => import('./src/components/Spinner');

const Loading = (props) => {
  if (props.error) {
    return <div> Routing Error!</div>;
  }

  // Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.
  // const module = await Spinner();
  // console.log('module: ', module);
  // module.default();

  // ERROR: Render 4 Times...
  Spinner()
  //   .then(module =>
  //     // (parameter) module: typeof import("/Users/jiahlee/Documents/react-boilerplate/client/src/components/Spinner")
  //     // ERROR : Loading(...): Nothing was returned from render.
  //     // module.Spinner
  //     module.default()
  // )
  return 'Loading...'
};

const Home = Loadable({
  loader: () => import('./src/components/Home' /* webpackChunkName: 'Home' */),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./src/components/User' /* webpackChunkName: 'User' */),
  loading: Loading,
});

const NoMatch = Loadable({
  loader: () => import('./src/components/NoMatch' /* webpackChunkName: 'NoMatch' */),
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

// ### Need to code Splitting hot module import
const Routes = (!module.hot || (process.env.NODE_ENV === 'production')) ? routes : hot(module)(routes);
export default Routes;
