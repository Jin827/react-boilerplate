import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Store from './Store';
import Routes from './Routes';

require('./styles/main.scss');

const root = document.createElement('div');
document.body.appendChild(root);

render(
  <Provider store={Store}>
    <Routes />
  </Provider>,
  root,
);
