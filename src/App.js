import './App.css';
import { useState, useEffect } from 'react'
import FilmList from "./FilmList";
import Details from "./Details";
import TMDB from "./TMDB";

export default function App() {
  
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({});

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
    })
  }, [])

    const handleDetailsClick = film => {
        console.log(`info for ${film.title}`);
        setCurrent(film);
    }
    return (
    <div className="App">
      <div className="film-library">
        
        <FilmList 
         films={films}
         handleDetailsClick={handleDetailsClick}/>

        <Details 
        films={TMDB.films}

        film={current} />

      </div>
    </div>
  );
}