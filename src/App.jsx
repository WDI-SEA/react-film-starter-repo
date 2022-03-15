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

import React, {useState,useEffect} from 'react'
import Details from './Details'
import FilmList from './FilmList'
import TMDB from './TMDB'
import axios from 'axios'




export default function App () {

  const [films, setFilm] = useState({
    films: [],
    current: {},
  })

  const apiKey = process.env.REACT_APP_TMDB_API_KEY
  useEffect(()=>{
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    fetch(url)
     .then(response => response.json())
     .then(jsonData => {
      console.log(jsonData.results)
      setFilm({...films, films: jsonData.results})
    })
  },[])

  const handleDetailsClick = (film) =>{
    console.log(film)
    setFilm({...films, current: film})
}


  return(

    <div className="film-library">
      <FilmList films={films.films} handleDetailsClick={handleDetailsClick} />
      <Details film={films.current} />
    </div>

  )
}

