import React, { useState, useEffect } from "react"
import './App.css'
import Details from './Details'
import FilmList from './FilmList'
import TMDB from "./TMDB"

export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  const handleDetailsClick = film => {
    console.log(`fetching details for ${film.title}`)
    setCurrent(film)
  } 

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB.api_key}&language=en-US&page=1`
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      setFilms(jsonData.results)
    })
  }, [])

  return (
    <div className="App">
      <div className="film-library">
        <FilmList films={films} handleDetailsClick={handleDetailsClick} setCurrent={setCurrent} />
        {current && <Details film={current} />}
      </div>
    </div>
  );
}