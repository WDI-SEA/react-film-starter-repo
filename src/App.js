import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Film_Details from './film-details';
import Film_List from './film-list';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <Film_List films={TMDB.films}/>

        <Film_Details films={TMDB.films}/>
      </div>
    );
  }
}

export default App;