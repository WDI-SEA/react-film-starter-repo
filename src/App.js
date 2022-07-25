import React, { Component } from 'react';
import FilmList from './components/FilmList'
import Details from './components/Details'

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