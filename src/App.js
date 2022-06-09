import React, { Component } from 'react';
import FilmList from './component/FilmList';
import Detail from './component/Detail';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmList films={TMDB.films} />
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <Detail films={TMDB.films}/>
        </div>
      </div>
    );
  }
}

export default App;