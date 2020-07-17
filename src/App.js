import React, {useState} from 'react';
import './App.css';
import FilmDetails from './FilmDetails'
import FilmListing from './FilmListing'
import TMDB from './TMDB'



const App = () => {
  const [films, setFilms] =useState(TMDB.films)
  const [current, setCurrent] = useState({})

  return (
    <div className="film-library">
          <FilmListing films={films} />
          <FilmDetails films={current} />
    </div>
  );
}

export default App;