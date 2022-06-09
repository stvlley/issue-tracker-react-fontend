import React from 'react';
import LoginForm from './components/LoginForm';
// import Navbar from './components/Navbar';
import Navvy from './components/Navvy';
import Registration from './components/auth/Registration';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
    <Navvy />
    <LoginForm />
    </BrowserRouter>
  );
}

export default App;
