import React from "react";

function Weather(props) {
  const icon = props.selectedWeather[2];
  const roundTemp = Math.round(props.selectedWeather[0]);
  return (
    <div className="weather-container">
      <div className="data">
        <h3>
          {props.selectedWeather[3] ? props.selectedWeather[3] : "Weather"}
        </h3>
        <img
          className="icon-img"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={props.selectedWeather[3]}
        ></img>
        <div className="temp-div">
          <p>Current Temp:</p>
          <h5>{roundTemp}f</h5>
        </div>
        <div className="conditions-div">
          <p>Conditions:</p>
          <h5>{props.selectedWeather[1]}</h5>
        </div>
      </div>
    </div>
  );
}

export default Weather;
