import { useEffect,useState } from 'react'
import './App.css'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'
require('dotenv').config()


export default function App() {
  const url = `https://api.themoviedb.org/3/movie/?api_key=${TMDB.api_key}`
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  const handleDetailsClick = film => {
    console.log('fetching details for film:', film.title)
   
    
    setCurrent(film)
}

useEffect(() => {
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
  fetch(popularFilmsUrl)
  .then(response => response.json())
  .then(jsonDeets => {
    console.log(jsonDeets)
  })
}, [])
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