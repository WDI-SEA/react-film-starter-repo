import { useState } from 'react'
import './App.css';
import Details from './Details';
import FilmList from './FilmList';
import TMDB from './TMDB.js';

export default function App () {
  const [films, setFilms] = useState({
    films: TMDB.films,
    current: {}
  })
    return (
      <div className="film-library">
        {/* <FilmList films={TMDB.films} /> */}
        {/* <FilmList films={filmsList} /> */}
        {/* <FilmList films={TMDB.films}/> */}
        <FilmList films={films.films}/>
        <Details film={films.current} />
      </div>
    )
}