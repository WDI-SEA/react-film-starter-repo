import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'


function App () {
  const [films,setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  const popularFilmsURL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
  const popularTvUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${TMDB.api_key}&language=en-US&page=1`


  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
    setCurrent(film)
  }

  useEffect(() => {
    console.log("useEffect is firing!")
    // fetch(popularFilmsURL)
    fetch(popularFilmsURL)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData.results)
      setFilms(jsonData.results)
    })
  }, [])

  return (
    <div className="film-library">
      <FilmList 
        films={films}
        handleDetailsClick={handleDetailsClick}
      />
      <Details 
        film={current}
      />
  </div>
  );
}


export default App;