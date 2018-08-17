import React from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './Home';
import Counter from './counter';

const Nav = () => [
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
    </ul>
  </nav>,
  <Route path="/" exact component={Home} />,
  <Route path="/Counter" exact component={Counter} />,
];

export default Nav;
