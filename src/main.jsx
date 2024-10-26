import React from 'react'
import * as ReactDOM from 'react-dom/client'  // Change this line
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'  // Add the .jsx extension
import './index.css'

console.log("Loading Main.jsx");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);