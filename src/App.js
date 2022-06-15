// import React, { Component } from 'react';
import './App.css';
import FilmList from './components/FilmList';
import Details from './components/Details';
// import movies from './TMDB'
import TMDB from './TMDB'
import { useEffect, useState } from 'react';
import axios from 'axios'
// import React from 'react'




const App = () => {
  const [current, setCurrent] = useState({})
  const [films, setFilms] = useState(TMDB.films)  
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`

  
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(popularFilmsUrl)
        // console.log(popularFilmsUrl)
        // const res = await axios.get(url)
        res = res.data
        setFilms(res.data.results)

      } catch(err) {
        console.log('err', err)
      }
    })()
  }, [popularFilmsUrl])


  const handleDetailsClick = async film => {
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

export default App


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