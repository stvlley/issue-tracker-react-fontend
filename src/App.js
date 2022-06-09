import React from 'react';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Registration from './components/auth/Registration';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
  
    <Navbar />
    <LoginForm />
    </BrowserRouter>
  );
}

export default App;
