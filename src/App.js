// import React, { Component } from 'react';
// import './App.css';
// import FilmList from './FilmList';
// import Details from './Details';
// import TMDB from './TMDB';

// class App extends Component {
//   render() {
//     return (
//       <div className="film-library">
//           <FilmList films={TMDB.films}/>
//           <Details films={TMDB.films}/>
//       </div>
//     );
//   }
// }

// export default App;

import TMDB from './TMDB'
import { useState, useEffect } from 'react'
import FilmList from './FilmList'
import Details from './Details'
import 'dotenv/config'

export default function App() {
  const [films,setFilms] = useState(TMDB.films)
  const [current,setCurrent] = useState({})

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
    setCurrent(film)
  }
  
  useEffect(()=>{
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    // console.log(popularFilmsUrl)
    console.log("useEffect is firing!")
    fetch(popularFilmsUrl)
    .then(res=>res.json())
    .then(jsonData => {
      // console.log(jsonData)
      setFilms(jsonData.results)
    })
  },[])

  return (
    <div className='film-library'>
      <FilmList films={films} handleDetailsClick={handleDetailsClick}/>
      <Details film={current} />  
    </div>
  )
}