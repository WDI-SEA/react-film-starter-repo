// import useState from 'react'
// import './App.css'
// import Details from './Details'
// import FilmList from './FilmList'
// import TMDB from './TMDB'
// function App () {
//   const [films, setFilms] = useState(TMDB.films)
//   const [current, setCurrent] = useState({})
    
//   const handleDetailsClick = film => {
//     setCurrent(film)
//   }
  
//   return (
//       <div className="film-library">
//         <FilmList 
//         films = {films}
//         handleDetailsClick={handleDetailsClick}
//         />

//         <Details 
//         films = {TMDB.films}
//         film = {current}
//         />
//       </div>
//     )
  
// }

// export default App

import { useState } from 'react'
import './App.css'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'

export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  const handleDetailsClick = film => {
    console.log('fetching details for film:', film.title)
    setCurrent(film)
}


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