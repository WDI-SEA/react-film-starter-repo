import React, { Component } from 'react';
import './App.css';
import TMDB from './TMDB'

import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';

class App extends Component {
  render() {
    return (
     <div id='Container' className='film-library'>
       <FilmListing films={TMDB.films} />
       <FilmDetails films={TMDB.films} />
       
     </div>
    );
  }
}

export default App;