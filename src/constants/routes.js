// constants/routes.js

import React from 'react';

const Home = React.lazy(() => import('~/pages/Home'));
const Vietcombank = React.lazy(() => import('~/pages/Vietcombank'));
const Momo = React.lazy(() => import('~/pages/Momo'));
const Viettinbank = React.lazy(() => import('~/pages/Viettinbank'));
const Vpbank = React.lazy(() => import('~/pages/Vpbank'));

export const path = {
  Home: '/',
  Vietcombank: '/vcb',
  Momo: '/momo',
  Viettinbank: '/viettinbank',
  Vpbank: '/vpbank'
};

export const route = [
  {
    path: path.Home,
    component: Home
  },
  {
    path: path.Vietcombank,
    component: Vietcombank
  },
  {
    path: path.Momo,
    component: Momo
  },
  {
    path: path.Viettinbank,
    component: Viettinbank
  },
  {
    path: path.Vpbank,
    component: Vpbank
  }
];
