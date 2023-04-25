import { useState } from "react"
import './App.css';
import Details from './Details';
import FilmList from './FilmList';
import TMDB from "./TMDB"

function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  const handleDetailsClick = film => {
    console.log(`fetching details for ${film.title}`)
    setCurrent(film)
  } 

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
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="film-library">
//         <FilmList  films={TMDB.films} />

//         <Details films={TMDB.films} />
//       </div>
//     );
//   }
// }

export default App;