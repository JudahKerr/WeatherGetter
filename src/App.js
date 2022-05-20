import React from "react";
// import {BrowserRouter as Router, } from "react-router-dom";
import Header from "./componets/Header";
import Search from "./componets/Search";
import Weather from "./componets/Weather";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Weather />
    </div>
  );
}

export default App;
