import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Home from './Home';
import Counter from './counter';

const Nav = () => [
  <nav key="1">
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/counter">Counter</NavLink>
      </li>
    </ul>
  </nav>,
  <Route key="2" path="/" exact component={Home} />,
  <Route key="3" path="/Counter" exact component={Counter} />,
];

export default Nav;
