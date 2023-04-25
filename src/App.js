import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';

const App = () => {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({})

  useEffect(()=> {
    // ?? IIFE
    // immediately invoked function expression
    const movieReqeust = async () => {
      try{
        const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
        const response = await axios.get(popularFilmsUrl)

        console.log(response.data)
        setFilms(response.data.results)

      } catch(error) {
        console.log(error)
      }
    } // () immediately invoke the function expression
 
    // (() => {
    //   console.log('hi i am an IIFE')
    // }) ()

    movieReqeust()
  }, [])

  const handleDetailsClick = (film) => {
    console.log(`fetching details for ${film.title}`)
    setCurrent(film)
  };

  return (
    <div className="App">
      <div className="film-library">
        <FilmList films={films} handleDetailsClick={handleDetailsClick} />
        <Details film={current} />
      </div>
    </div>
  );
};

export default App;
