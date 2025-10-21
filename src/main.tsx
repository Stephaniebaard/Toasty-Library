import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FavoritesProvider } from './context/FavoritesContext';
import { RatingsProvider } from './context/RatingsContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FavoritesProvider>
      <RatingsProvider>
        <App />
      </RatingsProvider>
    </FavoritesProvider>
  </React.StrictMode>
);
