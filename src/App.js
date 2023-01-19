
import './App.css'
import Details from './Details'
import FilmList from './FilmList'
import TMDB from './TMDB'
import axios from 'axios'

import {useState, useEffect} from 'react'
// require('dotenv').config()

export default function App(){
  let [films,setFilms] = useState(TMDB.films)
  let [current,setCurrent] =  useState({})
  function handleDetailsClick(film){
    console.log(`printing for ${film}`)
    setCurrent(film)
  }
  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonData => setFilms(jsonData.results))
      .catch(console.warn) 
  }, [])
  return(
    <div className="film-library">

    <FilmList films={films} handleDetailsClick={handleDetailsClick}/>
    <Details film={current}/>
  </div>
  )
}