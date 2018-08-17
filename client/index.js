/* eslint no-console: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './app';
import Counter from './src/components/counter';

require('./styles/main.scss');

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);

/* ES6 & 7 Feature Test */
const cal = async args => {
  const {a, b} = args;
  await console.log('1. Await');
  console.log('2. Async/Await Done');
  return a + b;
};

cal({a: 1, b: 2});

console.log(`Environment is ${process.env.NODE_ENV}`);
