import React, { useState } from 'react';

function TrafficLight() {
  const [activeLight, setActiveLight] = useState(null);

  const handleLightClick = (color) => {
    setActiveLight(color);
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${activeLight === 'red' ? 'bright' : ''}`}
        onClick={() => handleLightClick('red')}
      ></div>
      <div
        className={`light yellow ${activeLight === 'yellow' ? 'bright' : ''}`}
        onClick={() => handleLightClick('yellow')}
      ></div>
      <div
        className={`light green ${activeLight === 'green' ? 'bright' : ''}`}
        onClick={() => handleLightClick('green')}
      ></div>
    </div>
  );
}

export default TrafficLight;