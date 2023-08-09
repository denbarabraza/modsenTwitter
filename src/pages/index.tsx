import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from '@/components/Loader';
import { ThemeToggle } from '@/components/ThemeToggle';
import { mainRoutes, rootRoutes } from '@/constants/routes.tsx';
import { MainBlock } from '@/pages/Main/styles.ts';

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
      <MainBlock>
        <ThemeToggle />
        <Routes>
          {mainRoutes.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </MainBlock>
    </React.Suspense>
  );
};
