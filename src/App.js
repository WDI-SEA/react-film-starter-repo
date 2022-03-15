import React, { useState, useEffect } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';

function App() {
  const [films, setFilms] = useState([])
  const [current, setCurrent] = useState({})

  const handleDetailsClick = (film) => {
    return ( 
      console.log(`Fetching Details for ${film.title}`),
      setCurrent(film)
    )
  }

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonData => {
        setFilms(jsonData.results)
      })
  }, [])

  return (
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick}/>
      <Details film={current} />
    </div>
  );
}

export default App;