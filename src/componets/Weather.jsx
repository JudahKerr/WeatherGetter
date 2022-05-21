import React from "react";

function Weather(props) {
  return (
    <section className="weather">
      <div className="weather-container">
        <h3>{props.selectedWeather[3] ?props.selectedWeather[3] : "City" }</h3>
        <div className="data">
          <p>
            Tempurate:
            <span>{props.selectedWeather[0]}</span>
          </p>
          <p>
            Conditions:
            <span>{props.selectedWeather[1]}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Weather;
