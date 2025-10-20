import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

console.log('Starting React app...');

try {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
  console.log('React app rendered successfully');
} catch (error) {
  console.error('Failed to render React app:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; background: #fee; color: #c00; font-family: Arial, sans-serif;">
      <h1>Application Failed to Load</h1>
      <p>Check the browser console for error details.</p>
    </div>
  `;
}
