import React, { Component } from 'react';
import Films from "./Films.js";
import Details from "./Details.js";
import TMDB from "./TMDB.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <Films
            films={TMDB.films}
          />
          <Details
            films={TMDB.films}
          />
        </div>
      </div>
    );
  }
}

export default App;