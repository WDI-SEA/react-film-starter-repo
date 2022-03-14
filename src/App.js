// import React, { Component } from 'react';
import './App.css';
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'


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


import React, { useState } from 'react';

// functional component

export default function App() {

  const [TMDBInfo, setTMDB] = useState({
    films: TMDB.films,
    current: []
  });

  const handleDetailsClick = (film) => {
    console.log('Fetching details for' + film.title)
    setTMDB({
      ...TMDBInfo, current:film
    })
  }

  return (
    <div className="film-library">
      <FilmList films={TMDBInfo.films} handleDetailsClick={handleDetailsClick}/>

      <Details current={TMDBInfo.current}/>
    </div>
  )
}