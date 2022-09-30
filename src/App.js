// import React, { Component } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
// import TMDB from './TMDB';
import { useState, useEffect } from 'react'


export default function App() {

  const api_key = process.env.REACT_APP_TMDB_API_KEY
  const [current, setCurrent] = useState({})
  // const [films, setFilms] = useState(TMDB.films)
  const [films, setFilms] = useState([])
  
  // console.log(api_key)
  // console.log(popularFilmsUrl)
  
  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
    console.log("UseEffect is firing!")
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      setFilms(jsonData.results)
    })
  }, [])

  const handleDetailsClick = (film) => {
    console.log('Fetching details for', film.title)
    setCurrent(film)
    
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