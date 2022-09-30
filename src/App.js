import React, { useState, useEffect } from 'react'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'
import axios from 'axios'

function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  const [faves, setFaves] = useState([])
  const [review, setReview] = useState('')

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

  const handleInputChange = e => {
    setReview(e.target.value)
  }

  const handleReviewPost = () => {
    const currentIdx = films.indexOf(current)
    const newFilmDeets = {...current, review: review}
    const newFilmList = [...films]
    newFilmList.splice(currentIdx, 1, newFilmDeets)
    if (faves.includes(current)) {
      const faveIdx = faves.indexOf(current)
      const newFaves = [...faves]
      newFaves.splice(faveIdx, 1, newFilmDeets)
      setFaves(newFaves)
    }
    setCurrent(newFilmDeets)
    setFilms(newFilmList)
    setReview('')
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
        review={review}
        handleInputChange={handleInputChange}
        handleReviewPost={handleReviewPost}
      />
    </div>
  );
}

export default App;