import { useState } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';

export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  
  const handleDetailsClick = film =>{
    console.log('fetching details for ', film.title)
    setCurrent(film)
  }
    return (
      <div className="App">
        <div className="film-library">
          <FilmList films={films} film={current} handleDetailsClick={handleDetailsClick} />
          <Details films={films} film={current} />
        </div>
      </div>
    );
}

;