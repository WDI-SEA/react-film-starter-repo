import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB  from './TMDB';
import { useState } from 'react';

export default function App(){
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

    return (
      <div className="film-library">
        <FilmList films={films} setFilms={setFilms}/>
        <Details film={current} setCurrent={setCurrent}/>
      </div>
    );
  }