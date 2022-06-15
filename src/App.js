import './App.css';
import FilmList from './components/FilmList';
import Details from './components/Details';
import TMDB from './TMDB'
import { useState, useEffect } from 'react';

export default function App() {
  const [films, setFilms] = useState([])
  const [current, setCurrent] = useState({})
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
  useEffect(() => {
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonData => {
        setFilms(jsonData.results)
      })
  }, [popularFilmsUrl])
  const handleDetailsClick = (film) => {
    setCurrent(film)
  }
  return (
    <div className="film-library">
      <FilmList
        movies={TMDB.films}
        films={films}
        onDetailsClick={handleDetailsClick}
      />
      <Details
        film={current}
      />
    </div>
  );
}
