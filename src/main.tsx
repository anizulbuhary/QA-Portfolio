import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BugProvider } from './context/BugContext'
import { ThemeProvider } from './context/ThemeContext'
import './tailwind.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <BugProvider>
          <App />
        </BugProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
