import './App.css';
import FilmList from './FilmList';
import Details from './Details'
import TMDB from './TMDB';
import { useState } from 'react'

// refactoring for a function
function App() {
  // setting new constants
  const [films, setFilms] = useState(TMDB.films)
  const [thisFilm, setThisFilm] = useState({})

  // using set
  const handleDetailsClick = (film) => {
    console.log(`getting info ${film.title}`)
    setThisFilm(film)
  }
  return (
    <div className="film-library">
      <FilmList
        films={films}
        handleDetailsClick={handleDetailsClick}
      />
      <Details
        film={thisFilm}
      />
    </div>

  );

}

export default App;