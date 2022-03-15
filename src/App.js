import React, { useState, useEffect } from 'react';
import Details from './components/Details.jsx';
import './App.css';
import FilmList from './components/FilmList.jsx';
import axios from 'axios'




const App = () => {
  // console.log(process.env.REACT_APP_TMDB_API_KEY)
  const [filmsCollection, setFilmsCollection] = useState({
    films: [],
    current: {}
  })

  const myApiKey = process.env.REACT_APP_TMDB_API_KEY
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${myApiKey}&language=en-US&page=1`;

  useEffect(() => {
    axios.get(popularFilmsUrl)
    .then(dataResponse => setFilmsCollection({films:dataResponse.data.results, current: filmsCollection.current}))
    }, [popularFilmsUrl])


  const detailsClickHandler = (film) => {
    setFilmsCollection({...filmsCollection, current: film})
  }

  return(
    <div className="film-library">
      <FilmList films={filmsCollection.films} detailsClickHandler={detailsClickHandler} />
      <Details film={filmsCollection.current} />
    </div>
  )
}

export default App;