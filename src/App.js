import React from 'react';
import './App.css';
import Details from './components/Details';
import FilmList from './components/FilmList';
import TMDB from './TMDB'
import { useState, useEffect } from 'react'

function App() {
  const [current, setCurrent] = useState({})
  const [films] = useState(TMDB.films)
  

  const handleDetailsClick = (film) => {
    console.log("Fetching details for", film.title)
    setCurrent(film)
  }
  useEffect(() => {
		// IIFE immediately invoked function expression
		// the IIFE is to avoid putting async on the useEffect callback
		(async () => {
			try {
				const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
				const jsonData = await popularFilmsUrl.json()
				// setRepos(response.data)
				console.log(jsonData)
			} catch (err) {
				console.warn(err)
			}
		})()
		// console.log('?')
	}, [])
  // useEffect(() => {
  //   // fetch data
  //   const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
  //   const jsonData = await popularFilmsUrl.json()
  //   console.log(jsonData)
  //   // fetch(popularFilmsUrl)
  //     // .then(res => res.json())
  //     // .then(wisdom => {
  //     //   // set it in state
  //     //   console.log(wisdom)
  //     //   setWiseWords(wisdom.quote)
  //     // })
  // }, [])
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

export default App;