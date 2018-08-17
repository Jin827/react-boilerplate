import React from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './Home';
import Counter from './counter';

const Nav = () => [
  <nav key="1">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
    </ul>
  </nav>,
  <Route key="2" path="/" exact component={Home} />,
  <Route key="3" path="/Counter" exact component={Counter} />,
];

export default Nav;
