import {
  useState,
  useEffect
} from 'react'
import './App.css';
import FilmList from './components/FilmList'
import Details from './components/Details'
import TMDB from './TMDB';

function App() {
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
  const [films, setFilms] = useState([])
  useEffect(()=>{
    console.log("useEffect is firing!",popularFilmsUrl)
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData)
        setFilms(jsonData.results)
      })
      
  },[])
  const [current, setCurrent] = useState({})
  function handleDetailsClick(e) {
    console.log('fetching details for', e)
    setCurrent(e)
  }

  return (
    <div className="film-library">
      <div className="film-list">
        <h1 className="section-title">FILMs</h1>
        <FilmList
          films={films}
          handleDetailsClick={handleDetailsClick} />
      </div>

      <div className="film-details">
        <h1 className="section-title">DETAIL
        </h1>
        <Details
          film={current} />
      </div>
    </div>
  );
}


export default App;