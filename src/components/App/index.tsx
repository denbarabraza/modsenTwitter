import { useRoutes } from 'react-router-dom';

import { Container, GlobalStyles } from '@/components/App/style.ts';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorFallback } from '@/components/ErrorBoundary/ErrorFallback';
import { Header } from '@/components/HeaderTest';
import { Theme } from '@/components/Theme';
import { rootRoutes } from '@/constants/routes.tsx';
import { RootPages } from '@/pages';
import { Main } from '@/pages/Main';

export const App = () => {
  const routeResult = useRoutes(rootRoutes);

  return (
    <Theme>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Container>
          <GlobalStyles />
          <Header />
          {routeResult ? <RootPages /> : <Main />}
        </Container>
      </ErrorBoundary>
    </Theme>
  );
};
