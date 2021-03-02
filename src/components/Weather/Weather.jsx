/* eslint-disable react/prop-types */
import React from 'react';
import './Weather.css';

export default function Weather({ weather }) {
  return (
    <div className="row">
      <img src={weather.icon} alt="иконка погоды" />
      <div className="weather-main">
        <span>{weather.temp}</span>
        <span>&#176;</span>
      </div>
      <div>
        <div>
          <span className="weather-second">Утром</span>
          <span>{weather.morning}</span>
          <span>,</span>
        </div>
        <div>
          <span className="weather-second">Днем</span>
          <span>{weather.day}</span>
        </div>
      </div>
    </div>
  );
}
