import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'
import { useState, useEffect } from 'react'

export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState([])

  const handleDetailsClick = (film) => {
    console.log('fetching details for film:', film.title)
    setCurrent(film)
  }
  
  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
    console.log('UseEffect is firing!')
    fetch(popularFilmsUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        setFilms(jsonData.results)
      })
  }, [])

  return (
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick} />
      <Details film={current} />
    </div>
  )
}
