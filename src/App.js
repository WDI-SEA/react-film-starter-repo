// import React, { Component } from 'react';
import './App.css';
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'
import React, { useState, useEffect } from 'react';


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



// functional component

export default function App() {
  console.log(TMDB.api_key)
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
  
  // const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
  // console.log((popularFilmsUrl))
  
  useEffect(() => {
    console.log("UseEffect is firing!")
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      setTMDB({ ...TMDBInfo, films: jsonData.results})
    })
  }, [])


  return (
    <div className="film-library">
      <FilmList films={TMDBInfo.films} handleDetailsClick={handleDetailsClick}/>

      <Details current={TMDBInfo.current}/>
    </div>
  )
}