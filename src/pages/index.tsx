import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '@/constants/routes.tsx';

export const Pages = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </React.Suspense>
  );
};
