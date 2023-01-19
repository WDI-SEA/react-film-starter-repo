import './App.css';
import Details from './Details';
import FilmList from './FilmList';
import TMDB from './TMDB';
import { useState, useEffect } from 'react';

function App() {

  const [films, setFilm] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  

  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB.api_key}&language=en-US&page=1`
  console.log(URL)





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