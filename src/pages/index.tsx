import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from '@/components/Loader';
import { mainRoutes, rootRoutes } from '@/constants/routes.tsx';
import { RequireAuth } from '@/pages/RequireAuth';

export const RootPages = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        {rootRoutes.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </React.Suspense>
  );
};

export const MainPages = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<RequireAuth />}>
          {mainRoutes.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Route>
      </Routes>
    </React.Suspense>
  );
};
