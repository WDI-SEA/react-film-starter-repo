import FilmList from "./FilmList";
import Details from "./Details";
import TMDB from "./TMDB"
import React, { useState, useEffect } from 'react'

export default function App () {

  const [films, setFilms] = useState([])
  const [current, setCurrent] = useState([])

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
    setCurrent(film)
  }

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    console.log("UseEffect is firing!")
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      setFilms(jsonData.results)
    })

  }, [])

  return (
    <div className='App'>
        <div className='film-library'>
          <FilmList films={films} handleDetailsClick={handleDetailsClick}/>
          <Details films={current} handleDetailsClick={handleDetailsClick}/> 
        </div>
      </div>
  )
}


// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <div className='film-library'>
//           <FilmList films={TMDB.films} />
//           <Details films={TMDB.films}/>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;