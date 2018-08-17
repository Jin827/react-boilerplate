/* eslint no-console: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import Counter from './src/components/counter';
import Data from '../data/data';

require('./styles/main.scss');
require('../public/index.html');
require('./app');

function render(Component) {
  ReactDOM.render(
    // <AppContainer>
    <Component heading={Data.heading} contents={Data.contents} />,
    // </AppContainer>,
    document.getElementById('root'),
  );
}

render(Counter);

// if (module.hot) {
//   module.hot.accept('./src/components/counter', () => {
//     const NewCounter = Counter.default;
//     render(NewCounter);
//   });
// }

/* ES6 & 7 Feature Test */
const cal = async args => {
  const {a, b} = args;
  await console.log('1. Await');
  console.log('2. Async/Await Done');
  return a + b;
};

cal({a: 1, b: 2});

console.log(`Environment is ${process.env.NODE_ENV}`);
