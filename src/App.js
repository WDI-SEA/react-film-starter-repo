import { useState } from 'react'
import FilmList from './components/FilmList'
import Details from './components/Details'
import './App.css';
import TMDB from './TMDB'


function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

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