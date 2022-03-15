// import React, { Component } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB'
import React, { useState, useEffect } from 'react'


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

  const[films, setFilms] = useState([])

  const [currentFilm, setCurrentFilm] = useState({})

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`)
    setCurrentFilm(film)
  }

  
  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    // console.log(popularFilmsUrl)
    console.log("UseEffect is firing!")
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      setFilms(jsonData.results)
      setCurrentFilm(currentFilm)
    })
    .catch(error=>console.log('error fetching data'))
  }, [])

  return (
    <div className="film-library">
      <FilmList handleDetailsClick={handleDetailsClick} setFilms={films} films={films} />
      <Details currentFilm={currentFilm} films={films}/>
    </div>
  )
}

