import React, { useState, useEffect } from 'react';
import './App.css';
import { TMDB } from './TMDB';
import Details from './Details';
import FilmList from './FilmList';
import axios from 'axios';
const apiKey = process.env.REACT_APP_TMDB_API_KEY
const filmUrl = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`



function App() {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const filmUrl = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`;
  
  const [films, setFilms] = useState([]);
  const [current, setCurrent] = useState({});

  useEffect(() => {
    console.log(`Fetching data from ${filmUrl}`);
    axios.get(filmUrl)
      .then(response => {
        console.log(response.data.results);
        setFilms(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [filmUrl]);

  const handleDetailsClick = (film) => {
    console.log(`fetching details for ${film.title}`);
    setCurrent(film);
  };

  return (
    <div className="App">
      <div className="film-library">
        <FilmList films={films} handleDetailsClick={handleDetailsClick} setCurrent={setCurrent} />
        {current && <Details film={current} />}
      </div>
    </div>
  );
}

export default App;