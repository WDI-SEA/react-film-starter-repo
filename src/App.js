import './App.css';
import { useState } from 'react'
import FilmList from "./FilmList";
import Details from "./Details";
import TMDB from "./TMDB";

export default function App() {
  const [films] = useState(TMDB.films)
  const [current] = useState({});
    return (
    <div className="App">
      <div className="film-library">
        <FilmList films={films} />
        <Details films={current} />
      </div>
    </div>
  );
}