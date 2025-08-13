import { useState } from 'react';
import './Loginhome.css';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

export const Loginhome = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="bb">
      {showLogin ? (
        <Login onSwitch={() => setShowLogin(false)} />
      ) : (
        <Signup onSwitch={() => setShowLogin(true)} />
      )}
    </div>
  );
};
