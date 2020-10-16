import React from 'react';
import './App.css';
import Router from './router/Router';

function App() {
  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png"
        alt="star wars logo"
      />
      <Router />
    </div>
  );
}

export default App;
