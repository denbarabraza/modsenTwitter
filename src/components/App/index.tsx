import { Container, GlobalStyles } from '@/components/App/style.ts';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorFallback } from '@/components/ErrorBoundary/ErrorFallback';
import { Header } from '@/components/HeaderTest';
import { Theme } from '@/components/Theme';
import { useAppSelector } from '@/hooks/useStoreControl.ts';
import { RootPages } from '@/pages';
import { Main } from '@/pages/Main';
import { isAuthSelector } from '@/store/selectors/userSelectors.ts';

export const App = () => {
  const isAuth = useAppSelector(isAuthSelector);

  return (
    <Theme>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Container>
          <GlobalStyles />
          <Header />
          {!isAuth ? <RootPages /> : <Main />}
        </Container>
      </ErrorBoundary>
    </Theme>
  );
};
