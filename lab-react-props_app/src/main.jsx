import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppClass from './AppClass.jsx'
import imageData from './components/DataComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    <App data={imageData} />
    <AppClass data={imageData} />
  </div>
  </StrictMode>,
)
