import { useState } from 'react';
import './App.css';
import Details from "./Details"
import FilmList from "./FilmList"
import TMDB from "./TMDB"



export default function App() {
    const films = TMDB.films
    //const currentFilms = {}
    const [currentFilms, setCurrentFilms] = useState({})


    const handleDetailsClick= film => {
      console.log(`fetching Deatails for ${film.title}`)
      setCurrentFilms(film)
  }
    return (
      <div className="film-library">
      <FilmList
        films={films}
        handleDetailsClick={handleDetailsClick}
      />,
      <Details
        currentFilms={currentFilms}
        films={films}
      />
      </div>
    );
  }


