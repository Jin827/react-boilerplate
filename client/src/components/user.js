import React from 'react';
import Store from '../../Store';
import {COUNT} from '../actions/test';

const User = () => <h1>Welcome To User</h1>;

export default User;

/* eslint no-console: 0 */
/* ES6 & 7 Feature Test */
const cal = async args => {
  const {a, b} = args;
  await console.log('1. Await');
  console.log('2. Async/Await Done');
  return a + b;
};

cal({a: 1, b: 2});

// console.log('Log the initial state: ', Store.getState());

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// Store.subscribe(() => console.log(Store.getState()));

// // Dispatch some actions
// Store.dispatch(COUNT());

// // Stop listening to state updates
