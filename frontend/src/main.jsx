import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx';
import { ThemeContextProvider } from './context/ThemeContext.jsx';
import { SoundContextProvider } from './context/SoundContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContextProvider>
          <ThemeContextProvider>
            <SoundContextProvider>
              <App />
            </SoundContextProvider>
          </ThemeContextProvider>
        </SocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
