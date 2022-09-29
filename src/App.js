import React, { useState, useEffect } from 'react'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'
import axios from 'axios'

function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  const [faves, setFaves] = useState([])

  useEffect(() => {
    console.log('useEffect is firing!')
    async function fetchFilms() {
      try {
        const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
        const response = await axios.get(popularFilmsUrl)
        setFilms(response.data.results)
      } catch(error) {
        console.warn(error)
      }
    }
    fetchFilms()
  }, [])


  const handleDetailsClick = film => {
    setCurrent(film)
  }

  const handleFaveToggle = (film) => {
    let newFaves = faves.slice()
    const filmIndex = newFaves.indexOf(film)
    if (filmIndex >= 0) {
        newFaves.splice(filmIndex, 1)
    } else {
        newFaves.push(film)
    }
    setFaves(newFaves)
  }

  return (
    <div className='film-library'>
      <FilmList
        films={films}
        faves={faves}
        handleFaveToggle={handleFaveToggle}
        handleDetailsClick={handleDetailsClick}
      />

      <Details
        film={current}
        isFave={faves.includes(current)}  
      />
    </div>
  );
}

export default App;