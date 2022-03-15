import React, { useState } from 'react';
import FilmList from './FilmList';
import Details from './Details';
import { useEffect } from 'react';
import axios from 'axios';



const App = () => {
  const [films, setFilms] = useState([])

  const [current, setCurrent] = useState([])

  const handleDetailsClick = (film) => {
    let newCurrent = film
    setCurrent(newCurrent)
    console.log(`fetching details for ${current.title}`)

  }

  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    axios.get(popularFilmsUrl)
      .then(dataResponse => setFilms(dataResponse.data.results))

  })

  return (
    <>
      <div className='film-library'>
        <FilmList
          films={films}
          handleDetailsClick={handleDetailsClick}
        />
        <Details
          film={current}
        />

      </div>
    </>
  )
}

export default App;