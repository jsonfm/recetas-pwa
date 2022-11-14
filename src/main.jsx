import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from "react-router-dom";
import { AppProvider } from "@/context/provider";
import './styles/global.css'
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onOfflineReady() {},
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AppProvider>
  </React.StrictMode>
)
