import React, { useState } from 'react'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'

function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  return (
    <div className='film-library'>
      <FilmList films={films} />

      <Details film={current} />
    </div>
  );
}

export default App;