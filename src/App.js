<<<<<<< HEAD
import React, { useState } from "react";
import "./App.css";
import Details from "./Details.jsx";
import FilmList from "./FilmList.jsx";
import TMDB from "./TMDB.js";

export default function App(props) {
  const [current, setCurrent] = useState({});
  const [films, setFilms] = useState(TMDB.films);

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`);
    setCurrent(film);
  };
  return (
    <div className="film-library">
      <FilmList
        handleDetailsClick={handleDetailsClick}
        films={films}
        current={current}
      />

      <Details film={current} />
=======
import React, { useState } from 'react';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

function App() {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({});

  const handleDetailsClick = film => {
    console.log(`Fetching movie details for ${film.title}`)
    setCurrent(film)
  }

  return (
    <div className="film-library">
      <FilmListing films={films} handleDetailsClick={handleDetailsClick} />
      <FilmDetails film={current} />
>>>>>>> origin/p3-solution
    </div>
  );
}
