import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './Store';
import Routes from './Routes';

require('./styles/main.scss');

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
  <Provider store={Store}>
    <Routes />
  </Provider>,
  root,
);

// @flow
const name: string = 'Lee';
const age: number = 40;
const somethig: any = [1, 2, 3];
const users: string[] = ['John', 2];
