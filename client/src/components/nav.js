import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import routes from '../../Routes';

const Nav = () => (
  <div>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
      </ul>
    </nav>
    {routes.map(route => (
      <Route
        key={route.path}
        path={route.path}
        exact
        component={route.component}
      />
    ))}
  </div>
);

export default Nav;
