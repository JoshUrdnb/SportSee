import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import AppRoutes from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppRoutes />
  </StrictMode>,
)
