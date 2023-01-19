import './App.css';
import Details from './Details';
import FilmList from './FilmList';
import TMDB from './TMDB';
import { useState, useEffect } from 'react';

function App() {

  const [films, setFilm] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  

  useEffect(() => {

    console.log("UseEffect is firing!")
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b3b&language=en-US&page=1'
      console.log(Url)
    





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