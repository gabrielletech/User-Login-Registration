import React, { useState } from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';

function App() {
  const [isAuthenticated, userAuthenticated] = useState(false);
  return (
    <>
      <WelcomePage />
    </>
  );
}

export default App;
