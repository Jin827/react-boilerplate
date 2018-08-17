import React from 'react';
import Home from './src/components/Home';
import User from './src/components/user';

const Bus = () => <h1>BUS</h1>;
const Cart = () => <h1>CART</h1>;

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/user',
    component: User,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus,
      },
      {
        path: '/tacos/cart',
        component: Cart,
      },
    ],
  },
];

export default routes;
