/* eslint no-console: 0 */
require('./styles/main.scss');
require('../public/index.html');
require('./app');

const cal = async (args) => {
  const { a, b } = args;
  await console.log('1. Await');
  console.log('2. Async/Await Done');
  return a + b;
};

cal({ a: 1, b: 2 });

console.log(`Environment is ${process.env.NODE_ENV}`);
