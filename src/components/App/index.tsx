import { Container, GlobalStyles } from '@/components/App/style.ts';
import { Header } from '@/components/Header';
import { Theme } from '@/components/Theme';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Pages } from '@/pages';

const App = () => {
  return (
    <Theme>
      <Container>
        <ThemeToggle />
        <GlobalStyles />
        <Header />
        <Pages />
      </Container>
    </Theme>
  );
};

export default App;
