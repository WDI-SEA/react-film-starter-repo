// import React, { Component } from 'react';
import './App.css';
import FilmList from './components/FilmList';
import Details from './components/Details';
// import movies from './TMDB'
import { useState, useEffect } from "react"
import axios from "axios"

// class App extends Component {
//   render() {
//     console.log(movies)
//     return (
//       <div className="film-library">
//         <FilmList
//           movies={movies.films}
//         />
//         <Details
//         />
//       </div>
//     );
//   }
// }

// export default App;

export default function App() {
  const [films, setFilms] = useState([])
  const [current, setCurrent] = useState({})

  useEffect(() => {
    (async () => {
      try {
        const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        const apiResponse = await axios.get(popularFilmsUrl)
        // console.log(apiResponse.data.results)
        setFilms(apiResponse.data.results)
      } catch (error) {
        console.warn(error)
      }
    })()
  }, [])

  const handleDetailsClick = (film) => {
    setCurrent(film)
  }

  return (
    <>
      <div className='film-library'>
        <FilmList
          movies={films}
          handleDetailsClick={handleDetailsClick}
        />

        <Details
          film={current}
        />
      </div>
    </>
  )
}