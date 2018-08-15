import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Counter from './src/components/counter';
import Data from '../data/data';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component heading={Data.heading} contents={Data.contents} />
    </AppContainer>,
    document.getElementById('root'),
  );
}

render(Counter);

if (module.hot) {
  module.hot.accept('./src/components/counter', () => {
    const NewCounter = require('./src/components/counter').default;
    render(NewCounter);
  });
}
