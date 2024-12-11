import React, { useState } from 'react';
import './App.css';

function App() {
  // Set up the state for background color, initially set to black
  const [bgColor, setBgColor] = useState('black');

  // Function to handle background color change
  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Change Background Color</h1>
      <div className="button-container">
        <button className="red" onClick={() => changeBackgroundColor('red')}>Red</button>
        <button className="blue" onClick={() => changeBackgroundColor('blue')}>Blue</button>
        <button className="green" onClick={() => changeBackgroundColor('green')}>Green</button>
        <button className="yellow" onClick={() => changeBackgroundColor('yellow')}>Yellow</button>
        
      </div>
    </div>
  );
}

export default App;
