import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB  from './TMDB';
import { useState, useEffect } from 'react';


export default function App(){

  const [films, setFilms] = useState([])

  const [current, setCurrent] = useState({})

  useEffect(()=> {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    async function fetchMovieAPI(){
      try{
        console.log('useEffect is firing!')
        const response = await fetch(popularFilmsUrl)
        const responseData = await response.json()
        console.log(responseData)
        setFilms(responseData.results)
      }catch(err){
        console.log(err)
      }
    }
    fetchMovieAPI()
  }, [])

  const handleDetailsClick = (film) => {
    console.log('Fetching details for', film.title)
    setCurrent(film)
}
    return (
      <div className="film-library">
        <FilmList 
        films={films} 
        setFilms={setFilms}
        handleDetailsClick={handleDetailsClick}/>
        <Details 
        film={current} 
        />
      </div>
    );
  }