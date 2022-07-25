import React , { Component } from 'react'
import './App.css';
import FilmList from './FilmList';
import Details from './Details';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmList />
        <Details />
      </div>
    );
  }
}

export default App;