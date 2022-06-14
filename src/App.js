import { useState } from 'react'
import FilmList from './components/FilmList'
import Details from './components/Details'
import TMDB from './TMDB'

const App = () => {
  const [current, setCurrent] = useState({})

  const films = TMDB.films

  const handleDetailsClick = film => {
    setCurrent(film)
  }

  return (
    <div className='film-library'>
      <FilmList films={films} handleDetailsClick={handleDetailsClick} />
      <Details films={films} current={current} />
    </div>
  )
}

export default App
