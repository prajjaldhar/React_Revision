import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ data, location, pic }) => {
  return (
    <div>
      <div className="widget">
        <div className="left-panel panel">
          <div className="date">Monday, 20 Aug 2018</div>
          <div className="city">{location}</div>
          <div className="temp">
            <img src="https://codefrog.space/cp/wp/ts.png" alt width={60} />
            {data}°
          </div>
        </div>
        <div className="right-panel panel">
          <img src={pic} alt width={160} />
        </div>
      </div>
      <a
        id="btnDownload"
        href="https://www.codefrog.co.in/post/mini-weather-card/"
        target="_blank"
      >
        <img src="https://www.pngmart.com/files/10/Red-Download-Now-Button-PNG-File.png" />
      </a>
    </div>
  );
};

export default WeatherCard;
