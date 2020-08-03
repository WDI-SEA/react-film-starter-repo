import React, {useState} from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import FilmRow from './FilmRow';

const App = () => {
let films = TMDB.films
const [allFilms, setAllFilms] = useState(films)
const [current, setCurrent] = useState({})

const handleDetailsClick = (film) => {
  console.log(`Fetching details for ${film.title} 🍌`)
  setCurrent(film)
}
    return (
      <div className="film-library">
        <FilmListing  films={films} handleDetailsClick={handleDetailsClick} />
        <FilmDetails films={current}/>
      </div>
    );
  }



export default App;