import { useState, useEffect } from 'react'
import FilmList from './components/FilmList'
import Details from './components/Details'
import './App.css';
import TMDB from './TMDB'


function App() {
  const [films, setFilms] = useState([])
  const [current, setCurrent] = useState({})

  
  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      setFilms(jsonData.results)
    })
  }, [])


  const handleDetailsClick = (film) => {
    console.log('fetching details for ', film.title)
    setCurrent(film)
}

    return (
      <div className="App">
        <div className="film-library">
          <FilmList films={films}
                    handleDetailsClick={handleDetailsClick}
          />       
          <Details film={current}/> 
        </div>
      </div>
    );
}

export default App;