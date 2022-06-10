import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter} from "react-router-dom";
import Profile from './components/Profile';
import { LoginContext } from './contexts/LoginContext'


function App() {

  const [email, setEmail] = useState("")

  return (
    <BrowserRouter>
      <Navbar />

      <LoginContext.Provider value={{ email, setEmail }}>
        <Profile />
        {/* {showProfile ? <Profile /> : <Login setShowProfile={setShowProfile} />} */}
      </LoginContext.Provider>

    </BrowserRouter>
  );
}

export default App;
