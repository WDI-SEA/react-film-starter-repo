import React, { Component } from "react";
import './App.css'
import Details from './Details'
import FilmList from './FilmList'
import TMDB from './TMDB'
import { useState} from 'react'

function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  return(
    <>
      

    </>
  )
}

export default App

// export default class App extends Component {
//   render() {
//     return (
//         <div className="film-library">
//             <FilmList 
//               films= {TMDB.films}
//             />
//             <Details 
//               films= {TMDB.films} 
//             />
//         </div>
//     )
//   }
// }
