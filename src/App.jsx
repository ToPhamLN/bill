import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefautLayout';

import { route } from './constants/routes';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        {route.map((r) => {
          const Page = r.component;
          return <Route key={r.path} path={r.path} element={<Page />} />;
        })}
      </Route>
    </Routes>
  );
};

export default App;
