import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AdProvider } from './contexts/AdContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdProvider>
      <App />
    </AdProvider>
  </StrictMode>,
);