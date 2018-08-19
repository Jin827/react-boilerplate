import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from './src/components/nav';

const App = props => (
  <div id="app">
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>###</title>
      <meta property="og:title" content="###" />
      <meta property="og:description" content="###" />
      <meta property="og:type" content="###" />
      <meta property="og:url" content="###" />
      <meta property="og:image" content="###" />
    </Helmet>
    <Nav />
    {props.children}
  </div>
);

export default App;
