// import React, { Component } from 'react';
import './App.css'
import FilmList from './components/FilmList'
import Details from './components/Details'
import TMDB from './TMDB'
import { useState, useEffect } from 'react'


const App = () => {
  const [films, setFilms] = useState([])
  const [current, setCurrent] = useState({})
  
  // const films = TMDB.films

  // const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`; 

  // useEffect(() => {
  //   console.log("UseEffect is firing!")
  //   fetch(popularFilmsUrl)
  //   .then(response => response.json())
  //   .then(jsonData => {
  //     console.log(jsonData)
  //   })
  // }, [])

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonDeets => {
      setFilms(jsonDeets.results)
    })
  }, [])

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