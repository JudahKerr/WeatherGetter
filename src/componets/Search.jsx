import React, { useState} from "react";

// 62fc68d2e06db99a20bbb4281c4bce51

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const url1 = "https://api.openweathermap.org/data/2.5/weather?q=";
  const url2 = "&appid=62fc68d2e06db99a20bbb4281c4bce51&units=imperial";

  const fetchWeather = async () => {
    try {
      const response = await fetch(`${url1}${searchTerm}${url2}`);
      const weatherData = await response.json();
      console.log(weatherData);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const name = weatherData.name;
      props.pullWeather(temp, description, icon, name);
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(e) {
    const currentSearch = e.target.value;
    setSearchTerm(currentSearch);
  }
  function handleSubmit(e) {
    fetchWeather();
    e.preventDefault();
  }
  return (
    <div className="container">
      <div className="search">
        <form onSubmit={handleSubmit} className="form" autoComplete="off">
          <label htmlFor="name">Enter your city</label>
          <input type="text" id="name" onChange={handleChange}></input>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Search;


