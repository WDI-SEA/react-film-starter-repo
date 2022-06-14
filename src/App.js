import { useState } from 'react'
import './App.css';
import FilmList from './components/FilmList'
import Details from './components/Details'
import TMDB from './TMDB';

function App () {
  const films = TMDB.films
  const [current, setCurrent] = useState({})
  function handleDetailsClick(e) {
    console.log('fetching details for', e )
     setCurrent(e)
}
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMs</h1>
          <FilmList 
          films={films}
          handleDetailsClick={handleDetailsClick}/>
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