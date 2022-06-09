import React, {useState} from 'react';
import LoginForm from './components/Login';
import Navbar from './components/Navbar';
import Registration from './components/auth/Registration';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';
import { LoginContext } from './contexts/LoginContext'

function App() {

  const [showProfile, setShowProfile] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <BrowserRouter>
    <Navbar />

   <LoginContext.Provider value={{ email, setEmail}}>
   {showProfile ? <Profile /> : <LoginForm setShowProfile={setShowProfile} />}
   </LoginContext.Provider>
    
    </BrowserRouter>
  );
}

export default App;
