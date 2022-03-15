import React, { useState, useEffect } from "react";
import Details from "./Details";
import FilmList from "./FilmList";
import TMDB from "./TMDB";

export default function App () {
  const [allFilms, setFilm] = useState({
    films: TMDB.films,
    current: {}
  })

  const handleDetailsClick = film => {
    // console.log(film)
    setFilm({ ...allFilms, current: film })
  }


  // API
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
  // console.log(popularFilmsUrl)

  const fetchMovie = () => {
    console.log('useEffect is firing!')
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonData => {
        const movieResult = jsonData.results
        console.log(movieResult)
        setFilm({films: movieResult, current: allFilms.current})
      })
      .catch((err) => console.log('error fetching data', err))
  }
  useEffect(fetchMovie, []);

  return (
      <div className="film-library">
      <FilmList films={allFilms.films} handleDetailsClick={handleDetailsClick} />
      <Details film={allFilms.current} />
    </div>
    );
}

// class App extends Component {
//   state = {
//     TMDB
//   }
//   render() {
//     return (
//       <div className="film-library">
//         <FilmList films={this.state.TMDB.films}/>
//         <Details />
//       </div>
//     );
//   }
// }