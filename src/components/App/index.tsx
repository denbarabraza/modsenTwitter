import { Container, GlobalStyles } from '@/components/App/style.ts';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorFallback } from '@/components/ErrorBoundary/ErrorFallback';
import { Header } from '@/components/HeaderTest';
import { Theme } from '@/components/Theme';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Pages } from '@/pages';

const App = () => {
  return (
    <Theme>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Container>
          <ThemeToggle />
          <GlobalStyles />
          <Header />
          <Pages />
        </Container>
      </ErrorBoundary>
    </Theme>
  );
};

export default App;
