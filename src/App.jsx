import { useState } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from "./Details"
import TMDB from "./TMDB"
// import Poster from "./Poster"

function App (props) {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] =useState({})
  console.log(films)
    return (
      <div className="film-library">
       <FilmList 
        films={films}
        />
       <Details
        film ={current}
        />
      </div>
     
    )
  }

export default App