import React from 'react';
import LoginForm from './components/LoginForm';
// import Navbar from './components/Navbar';
import Navvy from './components/Navvy';
import Registration from './components/auth/Registration';


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Navvy />
      <LoginForm />
      <Registration />
  </div>
  );
}

export default App;
