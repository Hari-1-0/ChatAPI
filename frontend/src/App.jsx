import './index.css'
import {  Navigate, Route, Routes } from 'react-router-dom' 
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import { useThemeContext } from './context/ThemeContext'
import { useEffect } from 'react'

function App() {
  const {authUser} = useAuthContext();
  const {theme} = useThemeContext();
  useEffect(() => {
    document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${theme})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  }, [theme]);
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
