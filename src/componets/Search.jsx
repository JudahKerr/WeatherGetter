import React from "react";

function Search() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="container">
      <div className="search">
        <form onsubmit={handleSubmit}>
          <label htmlFor="name">Enter your city</label>
          <input type="text" id="name"></input>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Search;
