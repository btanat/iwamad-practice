import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router/internal/react-server-client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
