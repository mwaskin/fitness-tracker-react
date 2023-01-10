import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import { StateProvider } from './StateContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </React.StrictMode>
);
