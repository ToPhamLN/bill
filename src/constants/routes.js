import Home from '~/pages/Home';
import Momo from '~/pages/Momo';
import Vietcombank from '~/pages/Vietcombank';
import Viettinbank from '~/pages/Viettinbank';
import Vpbank from '~/pages/Vpbank';

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
