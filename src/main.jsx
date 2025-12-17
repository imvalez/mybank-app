import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Rimosso import './index.css' per usare solo il nostro styles.css importato in App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
