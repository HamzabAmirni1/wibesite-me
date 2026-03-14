import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AdProvider } from './contexts/AdContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdProvider>
      <LanguageProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </LanguageProvider>
    </AdProvider>
  </StrictMode>,
);