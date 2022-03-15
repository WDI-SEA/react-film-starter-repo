import React, { useState, useEffect } from "react";
import "./App.css";
import Details from "./Details.jsx";
import FilmList from "./FilmList.jsx";
import TMDB from "./TMDB.js";


export default function App() {
  const [films, setFilms] = useState([]);
  const [current, setCurrent] = useState({});

  const handleDetailsClick = (film) => {
    console.log(`Fetching movie details for ${film.title}`);
    setCurrent(film);
  };

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setFilms(jsonData.results);
      });
  }, []);
  return (
    <div>
    <div className="film-library">
      <FilmList
        handleDetailsClick={handleDetailsClick}
        films={films}
        current={current}
      />
      </div>

      <Details film={current} />

    <div className="film-library">
      <FilmListing films={films} handleDetailsClick={handleDetailsClick} />
      <FilmDetails film={current} />
    </div>
    </div>
  );
}
