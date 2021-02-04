import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails'
import FilmListing from './FilmListing'
import TMDB from './TMDB'

class App extends Component {
  render() {
    return (
      <div className='filmlibrary'>
        <div className='film-list'>
          <FilmListing films={TMDB.films} />
          <FilmDetails films={TMDB.films} />
          <h1 className='section-title'>FILMS</h1>
          
          </div> 
      </div>
    );
  }
}

export default App;