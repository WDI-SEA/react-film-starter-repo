import './App.css';
import FilmList from './components/FilmList';
import Details from './components/Details';
import TMDB from './TMDB'
import { useState } from 'react';

export default function App() {
  const films = TMDB.films
  const [current, setCurrent] = useState({})
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
