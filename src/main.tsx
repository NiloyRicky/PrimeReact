import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ArtProvider } from './Context.tsx'
import 'primeicons/primeicons.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArtProvider>
  <App />
    </ArtProvider>
  
  </StrictMode>,
)
