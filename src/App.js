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

  
  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then((data) => {
      setFilms(data.results)
      console.log("Movie Data:", data.results)
    })
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