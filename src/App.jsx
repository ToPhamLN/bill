import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefautLayout';
import { route } from '~/constants/routes';
import LoadingPage from '~/components/LoadingPage';
import NotFoundPage from '~/components/NotFoundPage';

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          {route.map((r) => {
            const Page = r.component;
            return <Route key={r.path} path={r.path} element={<Page />} />;
          })}
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
