import { useState, useEffect} from 'react';
import FilmList from './FilmList';
import Details from './Details'
import TMDB from './TMDB'


export default function App() {
  let results = []
  console.log(results)
  const[films, setFilms] = useState(results)
  const[current, setCurrent] = useState({})
  const handleDetailsClick = film => {
    console.log('fetching details for film:', film.title)
    setCurrent(film)
  }
  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      setFilms(jsonData.results)
      
    })
  }, [])
  return (
    <div className='film-library'>
      <FilmList films={films} handleDetailsClick={handleDetailsClick}/>

      <Details film={current} />
    </div>
  );
}