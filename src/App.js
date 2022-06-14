import './App.css';
import FilmList from './component/FilmList'
import Detail from './component/Detail';
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
      <Detail
        film={current}
      />
    </div>
  );
}