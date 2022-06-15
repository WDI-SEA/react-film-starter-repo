import {
  useState,
  useEffect
} from 'react'
import './App.css';
import FilmList from './components/FilmList'
import Details from './components/Details'
import axios from 'axios'
import TMDB from './TMDB';

function App() {
  const [films, setFilms] = useState(TMDB.films)
  
  // axios/ async method
  useEffect(() => {
    const fetchData = async () => {
      try{
        const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
        const response = await axios.get(popularFilmsUrl)
        setFilms(response.data.results)
        console.log(response.data)
      } catch(err){
        console.warn('API error',err)
      }
    }  
    fetchData()
  }, []) //make sure this useEffect only runs the first time
  
  // useEffect(()=>{
  //   console.log("useEffect is firing!",popularFilmsUrl)
  //   fetch(popularFilmsUrl)
  //     .then(response => response.json())
  //     .then(jsonData => {
  //       console.log(jsonData)
  //       setFilms(jsonData.results)
  //     })
      
  // }, [])
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