import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorFallback } from '@/components/ErrorBoundary/ErrorFallback';
import { Theme } from '@/components/Theme';
import { store } from '@/store/store.ts';

export const RootProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Theme>
          <ErrorBoundary fallback={<ErrorFallback />}>{children}</ErrorBoundary>
        </Theme>
      </Provider>
    </HashRouter>
  );
};
