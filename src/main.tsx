import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AdProvider } from './contexts/AdContext';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </AdProvider>
  </StrictMode>,
);