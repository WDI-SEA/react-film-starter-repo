// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FilmList from './components/FilmList'
import Details from './components/Details'
import TMDB from './TMDB'
import { useEffect, useState } from 'react'
// import axios from 'axios'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">

//         <div className="film-library">
//           <div className="film-list">
//             <h1 className="section-title">FILMS</h1>
//             <FilmList films={TMDB.films}/>
//           </div>

//           <div className="film-details">
//             <h1 className="section-title">DETAILS</h1>
//             <Details films={TMDB.films}/>
//           </div>
//         </div>

//       </div>
//     );
//   }
// }

const App = () => {

  const [current, setCurrent] = useState({})
  const [films, setFilms] = useState(TMDB.films)

  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
//         const response = await axios.get(popularFilmsUrl)
//         // console.log(popularFilmsUrl)
//         setFilms(response.data.results)

//       } catch(error) {
//         console.log('api error', error)
//       }

//     }
//     fetchData() 
// }, [])

  useEffect(() => {
    
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonData => {
        setFilms(jsonData.results)
      })

  }, [popularFilmsUrl])

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
    setCurrent(film)
}
  return (
    <div className='film-library'>
      <FilmList tmdb={TMDB.films}
        films = {films}
        handleDetailsClick={handleDetailsClick}
      />
      <Details 
        film = {current}
      />
      
    </div>
  )
}

export default App;