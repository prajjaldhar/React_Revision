import React, { useState } from "react";
const bulbOffImg = `https://th.bing.com/th/id/OIP.dTmDdvOWEO-0s7t0Z3Yr4gAAAA?rs=1&pid=ImgDetMain`;
const bulbOnImg = `https://cdn.christmaslightsetc.com/images/ProductCloseup/25048/A19-E26-socket-Transparent-Incandescent-yellow-party-sign-lamp-light-bulb-IMG_1480.jpg`;
import "./BulbToggle.css";

const BulbToggle = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleBulb = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="container">
      <h1>BulbToggle</h1>
      <img src={isOn ? bulbOnImg : bulbOffImg} alt="bluboff.png" />
      <button onClick={toggleBulb}>Click Me</button>
    </div>
  );
};

export default BulbToggle;
