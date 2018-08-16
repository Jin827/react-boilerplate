import React from 'react';
import { Helmet } from 'react-helmet';

const App = (props) => {
  const { children } = props;
  return(
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>###</title>
        <meta property="og:title" content="###" />
        <meta property="og:description"
  content="###" />
        <meta property="og:type" content="###" />
        <meta property="og:url" content="###" />
        <meta property="og:image" content="###" />
      </Helmet>
      { children }
    </div>
  );
};

export default App;
