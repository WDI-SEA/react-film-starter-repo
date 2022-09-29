import { useState } from 'react'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'

export default function App() {
  const [films] = useState(TMDB.films)
  const [current, setCurrentState] = useState([])

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`)
    setCurrentState(film)
  }

  console.log(films)
    return (
      <div className="film-library">
        <FilmList 
          films={films}
          handleDetailsClick={handleDetailsClick}
        />
        <Details 
          film={current}
        />
      </div>
    );
}
