import { useState } from "react";
import './App.css';
import FilmList from "./FilmList";
import Details from "./Details";
import TMDB from "./TMDB";

function App() {
    const [films] = useState(TMDB.films);
    const [current] = useState({});
    return (
    <div className="App">
      <div className="film-library">
        <FilmList films={films} />
        <Details film={current} />
      </div>
    </div>
  );
}

export default App;
