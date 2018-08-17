import React from 'react';

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
