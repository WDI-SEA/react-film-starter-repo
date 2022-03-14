// import React, { Component } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB'
import React, { useState } from 'react'


// class App extends Component {

//   render() {
//     return (
//       <div className="film-library">
//         <FilmList films={TMDB.films}/>
//         <Details films={TMDB.films}/>
//       </div>

//     );
//   }
// }

// refactor to functional component
export default function App() {

  const[films, setFilms] = useState({
    allFilms: TMDB.films
  })

  const [currentFilm, setCurrentFilm] = useState({})

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`)
    setCurrentFilm(film)
  }

  return (
    <div className="film-library">
      <FilmList handleDetailsClick={handleDetailsClick} setFilms={films} films={TMDB.films} />
      <Details currentFilm={currentFilm} films={TMDB.films}/>
    </div>
  )
}

