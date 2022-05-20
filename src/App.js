import React, {useState} from "react";
// import {BrowserRouter as Router, } from "react-router-dom";
import Header from "./componets/Header";
import Search from "./componets/Search";
import Weather from "./componets/Weather";



function App() {
  
  const [currentWeather, setCurrentWeather] = useState([]);
  function getWeather(temp, description, icon) {
    
    setCurrentWeather(() => {
      return [
        temp, description, icon
      ]
    });
    
  }

  return (
    <div>
      <Header />
      <Search 
        pullWeather={getWeather}
      />
      <Weather 
        selectedWeather={currentWeather}
      />
    </div>
  );
}

export default App;
