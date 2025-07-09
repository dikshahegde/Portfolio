// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './react_portfolio';
import './index.css'; // ✅ This line is crucial



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
