import './App.css';
import FilmList from './FilmList';
import Details from './Details'
import TMDB from './TMDB';
import { useState, useEffect } from 'react'

function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  
  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonData => {
      setFilms(jsonData.results)
    })
  }, [])

  const handleDetailsClick = (film) => {
    // console.log(`fetching details for ${film.title}`)
    setCurrent(film)
  }
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