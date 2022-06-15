// import React, { Component } from 'react';
// import TMDB from './TMDB';
// import FilmList from './components/FilmList'
// import Details from './components/Details'
// // import './App.css';
// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className='film-library'>
//           <FilmList films={TMDB.films}/>

//           <Details films={TMDB.films}/>

//         </div>


//       </div>
//     )
//   }
// }

import React, { useState } from 'react';

import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

function App () {

    const url = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    const [films, setFilms] = useState(TMDB.films)
    const [faves, setfaves] = useState([])
    const [current, setCurrent] = useState({})

   const  useEffect=(() => {
      const popularFilmsUrl = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
      fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonDeets => {
        console.log(jsonDeets)
      })
    }, [])

    const handleDetailsClick = film => {
      setCurrent(film)
    }

    return (
      <div className="film-library">
        <FilmListing films={films} handleDetailsClick={handleDetailsClick}/>
        <FilmDetails film={current} />
      </div>
    );

}

export default App;
