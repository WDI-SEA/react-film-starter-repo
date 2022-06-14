// import React, { Component } from 'react';
import './App.css'
import FilmList from './components/FilmList'
import Details from './components/Details'
import TMDB from './TMDB'
import { useState } from 'react'


const App = () => {
  const [current, setCurrent] = useState({})
  
  const films = TMDB.films

  const handleDetailsClick = film => {
    setCurrent(film)
  }

  return (
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick} />

      <Details films={films} current={current}/>
    </div>
  );
}

export default App

// class App extends Component {
//   render() {
//     const films = TMDB.films
//     return (
//       <div className="film-library">
//         <FilmList films={films}/>

//         <Details films={films}/>
//       </div>
//     );
//   }
// }