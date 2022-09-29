
import './App.css';
import FilmList from './FilmList';
import Details from "./Details"
import TMDB from "./TMDB"
// import Poster from "./Poster"

function App (props) {
    return (
      <div className="film-library">
       <FilmList 
        films={TMDB.films}
        />
       <Details
        films={TMDB.films} />
      </div>
     
    )
  }

export default App