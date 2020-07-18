import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FilmList from './FilmList'
import FilmDetails from './FilmDetails'
// import FilmRow from './FilmRow'
import TMDB from './TMDB'

function App (props) {
    return (
      <div className="App">
        <FilmList films={TMDB.films} />
        <FilmDetails films={TMDB.films} />
      </div>

    );
  
}

export default App;