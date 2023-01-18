import './App.css';
import Details from './components/Details';
import FilmList from './components/FilmList';
import TMDB from './TMDB';
import { useState } from 'react';

function App() {
  const [films, setFilm] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  
  function handleDetailsClick(film) {
    console.log('film details', film.title)
    setCurrent(film)
}
    return (
      <div className="film-library">
      
      <FilmList films={films} handleDetailsClick={handleDetailsClick} />
      <Details film={current}/>
      </div>
    );
  }

export default App;