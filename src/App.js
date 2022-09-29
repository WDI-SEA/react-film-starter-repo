// import React, { Component } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';
import { useState } from 'react'


export default function App() {

  const [current, setCurrent] = useState({})
  const [films, setFilms] = useState(TMDB.films)

  const handleDetailsClick = (film) => {
    console.log('Fetching details for', film.title)
    
  }

  return (
    <div className='App'>
        <div className='film-library'>
            <FilmList 
              films={films}
              setFilms={setFilms}
              handleDetailsClick={handleDetailsClick}
            />

            <Details
              film={current}
              setCurrent={setCurrent}
              handleDetailsClick={handleDetailsClick}
            />
        </div>

    </div>    
  )
}


// class App extends Component {
//   render() {
//     return (
//         <div className='App'>
//           <div className='film-library'>
//             <FilmList 
//               films={TMDB.films}
//             />

//             <Details
//               films={TMDB.films}
//             />
//           </div>

//         </div>
//     );
//   }
// }

// export default App;