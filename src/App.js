import React, { useState, useEffect } from 'react'
import './App.css'
import Details from './Details'
import FilmList from './FilmList'
// import TMDB from './TMDB'

function App () {
  const [allFilms, setFilm] = useState({
    films: [],
    current: {}
  })

  useEffect(()=> {    
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
    console.log(popularFilmsUrl)
    console.log('UseEffect is firing!')
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then((jsonData) => {
      setFilm({...allFilms, films: jsonData.results})      
    })
  },[])

  const handleDetailsClick = film => {
    console.log(film)
    setFilm({ ...allFilms, current: film })
  }

  return (
    <div className="film-library">
    <FilmList films={allFilms.films} handleDetailsClick={handleDetailsClick} />
    <Details film={allFilms.current} />
  </div>
  )
}
export default App
