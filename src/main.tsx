import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/styles.scss';
import App from './App';
import ThemeProvider from './context/theme-provider';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

createRoot(document.getElementById('root') || document.createElement('div')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
