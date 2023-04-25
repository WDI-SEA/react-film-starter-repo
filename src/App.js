import { useState, useEffect } from 'react';
import './App.css';
import Details from "./Details"
import FilmList from "./FilmList"
import TMDB from "./TMDB"



export default function App() {
    const [films, setFilms] = useState(TMDB.films)
    //const currentFilms = {}
    const [currentFilms, setCurrentFilms] = useState({})

    
    useEffect(() => {
      const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
      fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonDeets => {
        console.log(jsonDeets)
      })
    }, [])

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


