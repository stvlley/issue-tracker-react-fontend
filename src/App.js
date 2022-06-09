import React, {useState} from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';
import { LoginContext } from './contexts/LoginContext'
import Login from './components/Login';

function App() {

  const [showProfile, setShowProfile] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <BrowserRouter>
    <Navbar />

   <LoginContext.Provider value={{ email, setEmail}}>
     <Profile />
   {/* {showProfile ? <Profile /> : <Login setShowProfile={setShowProfile} />} */}
   </LoginContext.Provider>
    
    </BrowserRouter>
  );
}

export default App;
