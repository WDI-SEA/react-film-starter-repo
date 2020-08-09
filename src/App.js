import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
    this.state ={
      films: TMDB.films,
      current: {

      }
    }
  }
    handleDetailsClick(film) {
      console.log(`Fetiching details for: ${film}`)
      this.setState((state, props) => {
        return{current: this.props.film}
      })
    }
  
  render() {
    return (
    <div className="film-library">
      <FilmListing films={this.state.films} handleDetailsClick={this.handleDetailsClick}/>
      <FilmDetails films={this.state.current} handleDetailsClick={this.handleDetailsClick}/>
    </div>
    );
  }
}

export default App;