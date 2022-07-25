import React, { Component } from 'react';
import FilmList from './components/FilmList'
import Details from './components/Details'
import filmsDB from './TMDB'

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmList films={filmsDB.films} />
        <Details films={filmsDB.films} />
</div>
    );
  }
}

export default App;