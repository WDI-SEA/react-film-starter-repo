// import React, { Component } from 'react';
// import './App.css';
// import Details from './Details';
// import FilmList from './FilmList';
// import TMDB from './TMDB';

// class App extends Component {
//   render() {
//     return (
//     <div className="film-library">
//       <FilmList films={TMDB.films} />
//       <Details films={TMDB.films} />
//     </div>
//     );
//   }
// }

// export default App;

import React, {useState} from 'react'
import Details from './Details'
import FilmList from './FilmList'
import TMDB from './TMDB'

export default function App () {
  const [allFilms, setFilm] = useState({
    films: TMDB.films,
    current: {}
  })

  const handleDetailsClick = (film) =>{
    console.log(film)
    setFilm({...allFilms, current: film})
}

  return(

    <div className="film-library">
      <FilmList films={allFilms.films} handleDetailsClick={handleDetailsClick} />
      <Details film={allFilms.current} />
    </div>

  )
}

