import './App.css'
import FilmList from './components/FilmList'
import Details from './components/Details'
import TMDB from './TMDB'
import { useState, useEffect } from 'react'
import dotenv from 'dotenv'
import axios from 'axios'
import { isCompositeComponent } from 'react-dom/test-utils'

export default function App(){
  const [current, setCurrent] = useState({})
  const [films, setFilms] = useState(TMDB.films)

useEffect(() => {
  const fetchData = async () => {
    try {
      const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
      const response = await axios.get(popularFilmsUrl)
      setFilms(response.data.results)
      
    } catch(err) {
    console.warn('API error', err)
    }
  }
  fetchData()
}, [])

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
    setCurrent(film)
  }
  return (
    <div className="film-library">
      <FilmList 
      key={'FilmList'} 
      films={films}
      handleDetailsClick={handleDetailsClick}
      />

      <Details film={current}/>
      
    </div>
  )
}

