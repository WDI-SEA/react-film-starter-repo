import React, { Component } from "react";
import Details from "./Details"
import FilmList from './FilmList'
import TMDB from './TMDB'


class App extends Component {
  state = {
    TMDB
  }
  render() {
    return (
      <div className="film-library">
        <FilmList films={this.state.TMDB.films}/>
        <Details />
      </div>
    );
  }
}

export default App;
