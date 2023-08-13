import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorFallback } from '@/components/ErrorBoundary/ErrorFallback';
import { Theme } from '@/components/Theme';
import { store } from '@/store/store.ts';

import { App } from './components/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Provider store={store}>
      <Theme>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <App />
        </ErrorBoundary>
      </Theme>
    </Provider>
  </HashRouter>,
);
