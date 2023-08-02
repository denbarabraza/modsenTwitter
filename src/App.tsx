import { Header } from '@/components/Header';
import { Pages } from '@/pages';
import { GlobalStyles } from '@/styles/globalStyle.ts';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Pages />
    </>
  );
};

export default App;
