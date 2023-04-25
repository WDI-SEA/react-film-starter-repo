import { useState, useEffect } from 'react';
import './App.css';
import FilmList from './FilmList'
import Details from './Details'
import { TMDB } from './TMDB'
import axios from 'axios'

export default function App() {

  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;

    // fetch(popularFilmsUrl)
    //   .then(response => response.json())
    //   .then(jsonData => {
    //     console.log(jsonData.results)
    //     setFilms(jsonData.results)
    //   })
    const movieRequest = async () => {
      try {
        const response = await axios.get(popularFilmsUrl)
        console.log(response.data)
        setFilms(response.data.results)
      } catch(err) {
        console.log(err)
      }
    }

    movieRequest()
  }, [])
  
  const handleDetailsClick = (film) => {
    console.log(`fetching details for ${film.title}`)
    setCurrent(film)
  }

  return (
    <div className="film-library">
      <FilmList 
        films={films} 
        handleDetailsClick={handleDetailsClick}
      />

      <Details film={current} />
    </div>
  );
}
