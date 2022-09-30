import { useState, useEffect } from "react";
import './App.css';
import FilmList from "./FilmList";
import Details from "./Details";
import TMDB from "./TMDB";

function App() {
    const [films, setFilms] = useState(TMDB.films);
    const [current, setCurrent] = useState({});
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    useEffect(() => {
      const fetchFilms = async () => {
        try {
          console.log("UseEffect is firing!");
          const response = await fetch(popularFilmsUrl);
          const jsonData = await response.json();
          setFilms(jsonData.results);
        }
        catch (err) {
          console.warn(err);
        }
      }
      fetchFilms();
    }, []);
    const handleDetailsClick = film => {
        console.log(`info for ${film.title}`);
        setCurrent(film);
    }
    return (
    <div className="App">
      <div className="film-library">
        <FilmList films={films} handleDetailsClick={handleDetailsClick} />
        <Details film={current} />
      </div>
    </div>
  );
}

export default App;
