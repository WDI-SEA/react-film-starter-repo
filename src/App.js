// import React, { Component } from 'react'
import { useState } from 'react'
import FilmList from './FilmList'
import Details from './Details'
import './App.css'
import TMDB from './TMDB'


export default function App(props) {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  const handleDetailsClick = film => {
    console.log('fetching details for:', film.title)
    setCurrent(film)
  }


  return (
    <div className="film-library">
      <FilmList 
        films={films} 
        handleDetailsClick={handleDetailsClick}
      />

      <Details 
        films={TMDB.films}
        film={current}
       />

  </div>
  )
}





// export default class App extends Component {
//   render() {
//     return (
//       <div className="film-library">
//         <FilmList films={TMDB.films} />

//         <Details films={TMDB.films} />

//       </div>
 
//     )
//   }
// }