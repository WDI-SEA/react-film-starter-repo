import "./App.css"
import FilmList from "./components/FilmList"
import Details from "./components/Details"
import movies from "./TMDB"

const App = () => {
  return (
    <div className="film-library">
      <FilmList movies={movies.films} />
      <Details />
    </div>
  )
}

export default App
