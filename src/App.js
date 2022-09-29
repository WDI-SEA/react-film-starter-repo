import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB'
import { useState } from 'react'

function App (){
  const [films] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
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