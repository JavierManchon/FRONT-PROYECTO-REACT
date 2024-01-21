import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './main.css';

//Lo que está diciendo es cogeme con React el id root de index.html y renderiza el componente App dentro
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
