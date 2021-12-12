import "xp.css/dist/XP.css";
import React from 'react';
import greenHill from "./assets/greenHillZone.jpg";
import HomePage from "./components/HomePage.js";

function App() {

  return (
    <div className="App">
      <div className="picture-container">
        <div className="picture">
          <img src={greenHill} alt="Green Hill Zone" />
        </div>
      </div>
      <HomePage />
      
    </div>
  )
};

export default App;
