import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { Expo } from './assets/componentes/Expo.jsx'


//import './index.css'
import './assets/estilos.css'
import './assets/componentes/animated.css'
import './assets/globos.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
)
