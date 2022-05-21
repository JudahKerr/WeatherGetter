import React, { useState } from "react";
// import {BrowserRouter as Router, } from "react-router-dom";
import Header from "./componets/Header";
import Search from "./componets/Search";
import Weather from "./componets/Weather";
import Error from "./componets/Error";

function App() {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [error, setError] = useState(false);
  function getWeather(temp, description, icon, name) {
    setCurrentWeather(() => {
      return [temp, description, icon, name];
    });
  }

  function setErrorPage(string) {
    if (string === "true") {
      setError(true);
    } else if (string === "false") {
      setError(false);
    }
  }
  if (currentWeather.length < 1) {
    return (
      <div>
        <Header />
        <Search pullWeather={getWeather} setError={setErrorPage} />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Search pullWeather={getWeather} setError={setErrorPage} />
        {error ? <Error /> : <Weather selectedWeather={currentWeather} />}
      </div>
    );
  }
}

export default App;
