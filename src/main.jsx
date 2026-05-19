import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import './index.css'
import App from './App.jsx'

inject()

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

function scrollToTop() {
  window.scrollTo(0, 0)
}

scrollToTop()

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    scrollToTop()
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
