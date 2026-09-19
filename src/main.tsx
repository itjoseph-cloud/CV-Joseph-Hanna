import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import './analytics'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/CV-Joseph-Hanna">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
