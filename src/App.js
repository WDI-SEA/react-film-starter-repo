import React , { Component } from 'react'
import './App.css';
import FilmList from './components/FilmList';
import Details from './components/Details';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmList films={TMDB.films}/>
        <Details films={TMDB.films}/>
      </div>
    );
  }
}

export default App;