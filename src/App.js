import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB'
import { useEffect, useState } from 'react'

function App (){
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
  
  useEffect(() => {
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonDeets => {
      console.log(jsonDeets)
      setFilms(jsonDeets.results)
    })
  }, [])

  console.log(popularFilmsUrl)
  const handleDetailsClick = film => {
    // console.log(film)
    setCurrent(film)
  }

  return (
      <div className='film-library'>
        <FilmList 
          films={films} 
          handleDetailsClick={handleDetailsClick}
        />
        
        <Details film={current}/> 
      </div>
  );
}

export default App;