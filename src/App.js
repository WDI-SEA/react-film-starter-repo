// import React, { Component } from "react";
import "./App.css";
import FilmList from "./FilmList";
import Details from "./Details";
import TMDB from "./TMDB";
import react, { useState } from "react"


export default function App() {

  const [tmdb, setTmdb] = useState({
    films: TMDB.films,
    current: []
  });

  const handleDetailsClick = (film) => {
    console.log('Fetching details for' + film.title)
    setTmdb({
      ...tmdb, current:film
    })
  }

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
