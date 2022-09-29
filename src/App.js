import { useState, useEffect } from 'react'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'

export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrentState] = useState([])

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    console.log("UseEffect is firing!")
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      setFilms(jsonData.results)
    })
  }, [])

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`)
    setCurrentState(film)
  }

  console.log(films)
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
