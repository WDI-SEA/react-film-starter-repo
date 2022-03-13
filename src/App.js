import React, { Component } from 'react';
// import FilmRow from './components/FilmRow.jsx';
import Details from './components/Details.jsx';
import './App.css';
import FilmList from './components/FilmList.jsx';
import TMDB from './TMDB.js';

class App extends Component {
  state = {
    TMDB,
    films: [...TMDB.films]
  }
  render() {
    
   
    return (
      
       <div className="film-library">
        <FilmList films={this.state.films}/>
        <Details />
      </div>
   
    );
  }
}

export default App;