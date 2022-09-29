import { useState } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from "./Details"
import TMDB from "./TMDB"
// import Poster from "./Poster"

function App (props) {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] =useState({})

  const handleDetailsClick= (film)=>{
        console.log(`Fetching details for" ${props.film.title}`)
        setCurrent(film)
    }
  // console.log(films)

    return (
      <div className="film-library">
       <FilmList 
        films={films}
        handleDetailsClick ={handleDetailsClick}
        />
        
       <Details
        film ={current}
        />
      </div>
     
    )
  }

export default App