import React, { Component } from 'react';
import './App.css';
import FilmList from './components/FilmList';
import Details from './components/Details';
import movies from './TMDB'

class App extends Component {
  render() {
    console.log(movies)
    return (
      <div className="film-library">
        <FilmList
          movies={movies.films}
        />
        <Details

        />
      </div>
    );
  }
}

export default App;