import { useEffect, useState } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from "./Details"
import TMDB from "./TMDB"


function App (props) {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] =useState({})

  const TMDB_api_key = process.env.REACT_APP_TMDB_API_KEY
  // const url =" https://api.themoviedb.org/3/movie/550?"
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_api_key}&language=en-US&page=1`

  useEffect (()=>{
    fetch (popularFilmsUrl)
    .then (response => response.json())
    .then (jsonData =>{
      // console.log(jsonData)
      setFilms(jsonData.results)
    })
    .catch(err=>console.warn(err))
  }, [])


  const handleDetailsClick= (film)=>{
        // console.log(`Fetching details for" ${props.film.title}`)
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
        films={TMDB.films}
        film ={current}

        />
      </div>
     
    )
  }

export default App