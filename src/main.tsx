import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BugProvider } from './context/BugContext'
import './tailwind.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <BugProvider>
        <App />
      </BugProvider>
    </BrowserRouter>
  </StrictMode>,
)
