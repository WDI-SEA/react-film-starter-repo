// import React, { Component } from 'react'
import { useState, useEffect } from 'react'
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

  //need to restart the server to read the environment
// console.log('api key', process.env.REACT_APP_TMDB_API_KEY)

  
  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonData => setFilms(jsonData.results))
      .catch(console.warn) 
  }, [])

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