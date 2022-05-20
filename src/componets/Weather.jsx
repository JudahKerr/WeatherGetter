import React from "react";


function Weather(props) {
    return (
        <div className="weather-container">
            <h3>Weather</h3>
            <p>Results:
            <span>{props.selectedWeather}</span>
             </p>
        </div>
    )
};

export default Weather;