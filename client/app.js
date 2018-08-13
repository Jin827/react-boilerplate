import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './src/components/counter';
import { AppContainer } from 'react-hot-loader';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react-root')
  )
}

render(Counter)

if (module.hot) {
  module.hot.accept('./src/components/counter', () => {
    const NewCounter = require('./src/components/counter').default
    render(NewCounter)
  })
}