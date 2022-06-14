// import React, { Component } from 'react';
import './App.css';
import FilmList from './components/FilmList';
import Details from './components/Details';
// import movies from './TMDB'
import { useState } from 'react'
import TMDB from './TMDB'
// import React from 'react'




const App = () => {
  const [current, setCurrent] = useState({})
  const [films, setFilms] = useState(TMDB.films)  

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