import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './assets/styles.scss';


const rootContainer = document.getElementById('root');

if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
   );
  } else {
console.error('Root container is null')
};

