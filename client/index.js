import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

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
