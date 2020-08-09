import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      films: TMDB.films,
      current: {

      }
    }
  }
  render() {
    return (
    <div className="film-library">
      <FilmListing films={this.state.films}/>
      <FilmDetails films={this.state.current}/>
    </div>
    );
  }
}

export default App;