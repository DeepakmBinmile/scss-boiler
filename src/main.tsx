import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/styles.scss';
import App from './App';

createRoot(document.getElementById('root') || document.createElement('div')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
