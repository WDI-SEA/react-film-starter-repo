import { useEffect,useState } from 'react'
import './App.css'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'
require('dotenv').config()




export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  

useEffect(() => {
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
  fetch(popularFilmsUrl)
  .then(response => response.json())
  .then(jsonData => setFilms(jsonData.results))
    .catch(console.warn)
}, [])
const handleDetailsClick = film => {
  console.log('fetching details for film:', film.title)
  setCurrent(film)
}

return (
  <div className="film-library">
    <FilmList 
      films={films} 
      handleDetailsClick={handleDetailsClick}
    />

    <Details 
      films={TMDB.films} 
      film={current}
    />
  </div>
)
}