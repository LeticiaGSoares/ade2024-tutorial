import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Olá!</h1>
  </StrictMode>,
)
