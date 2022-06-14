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

    const [films, setFilms] = useState(TMDB.films)
    const [faves, setfaves] = usestate([])
    const [current, setCurrent] = usestate({})

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
