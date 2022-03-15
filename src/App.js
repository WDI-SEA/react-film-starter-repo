// import React, { Component } from "react";
import "./App.css";
import FilmList from "./FilmList";
import Details from "./Details";
import TMDB from "./TMDB";
import react, { useState, useEffect } from "react"


export default function App() {

  const [tmdb, setTmdb] = useState({
    films: TMDB.films,
    current: []
  });

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      let data=jsonData
      setTmdb({films:data.results, current:[]}) 
    })
  }, [])

  const handleDetailsClick = (film) => {
    console.log('Fetching details for' + film.title)
    setTmdb({
      ...tmdb, current:film
    })
  }

  const url = process.env.REACT_APP_TMDB_API_KEY

  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${url}&language=en-US&page=1`;

  
  console.log(popularFilmsUrl)

  return (
    <div className="film-library">
      <FilmList films={tmdb.films} handleDetailsClick={handleDetailsClick}/>

      <Details current={tmdb.current}/>
    </div>
  )
}



// class App extends Component {
//   render() {
//     return (
//       <div className="film-library">
//         <FilmList films={TMDB.films}/>

//         <Details films={TMDB.films}/>
//       </div>
//     );
//   }
// }

// export default App;
