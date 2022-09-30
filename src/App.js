import {useState,useEffect} from 'react'
import './App.css'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'
import axios from 'axios'


export default function App(){

  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
console.log(TMDB.api_key)
 
  const [films,setFilms] = useState(TMDB.films)
  const [current,setCurrent] = useState([])
  
  useEffect(()=>{
    
    axios.get(popularFilmsUrl)
    .then(response =>{
      console.log(response)
      setFilms(response.data.results)
    })
  },[])
  const handleDetailsClick = film => {
    console.log('fetching details for film:', film.title)
    setCurrent(film)

  }
  
  return (
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick} />

      <Details film={current} />
    </div>
  )
}
