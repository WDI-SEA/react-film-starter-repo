import { useState } from 'react'
// import './App.css'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'

export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  console.log(films)
    return (
      <div className="film-library">
        <FilmList 
          films={TMDB.films}
        />
        <Details 
          films={TMDB.films}
        />
      </div>
    );
}
