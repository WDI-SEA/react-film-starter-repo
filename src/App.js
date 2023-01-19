import { useState, useEffect } from 'react';
import './App.css'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'

export default function App() {

  //eslint-disable-next-line
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  useEffect(() => {
    console.log("UseEffect is firing!")
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    console.log(popularFilmsUrl)
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      setFilms(jsonData.results)
    })
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
        film={current}
        />
      </div>
    );
}