import {useState, useEffect} from 'react';
import './App.css';
import FilmList from  './FilmList'
import Details from './Details'
import TMDB from './TMDB'



function App() {
  let [films, setFilms] = useState(TMDB.films)
  let [current, setCurrent] = useState({})

  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`   // console.log("checking api", popularFilmsUrl)
  
  useEffect(() => {
    // console.log("UseEffect is firing!")
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonDeets => {
      // console.log(jsonDeets.results)
      setFilms(jsonDeets.results)
    })
    
  }, [])



  const handleDetailsClick = film => {
    //console.log('fetching details for film:', film.title)
    setCurrent(film)
  }

    return (
      <div className="film-library">
        <FilmList
          films={films}
          handleDetailsClick={handleDetailsClick}
        />

        <Details
          films={films}
          film={current}
        />
      </div>
    );

}

export default App;
