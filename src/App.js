import { useState, useEffect } from "react"
import axios from "axios"
import './App.css'
import Details from './Details'
import FilmList from './FilmList'
import TMDB from "./TMDB"

(() => {
  console.log('hi I am an IIFE')
})()

function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  const [faves, setFaves] = useState([])

  useEffect(() => {
    // ?? IIFE 
    // immediately invoked function expression
    (async () => {
      try {
        const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
        const response = await axios.get(popularFilmsUrl)

        console.log(response.data)
        setFilms(response.data.results)
      } catch (error) {
        console.log(error)
      }
    })() // immediately invoking the function expression

    // movieReqeust()
  }, []) // only fire off one time

  // console.log("API KEY", TMDB.api_key)

  const handleFaveToggle = film => {
    const newFaves = [...faves]
    const filmIndex = newFaves.indexOf(film)
    if (filmIndex === -1) {
        newFaves.push(film)
    } else {
        newFaves.splice(filmIndex, 1)
    }
    // regardless of how we modified newFaves we want to set it in state
    setFaves(newFaves)
  } 

  const handleDetailsClick = film => {
    console.log(`fetching details for ${film.title}`)
    setCurrent(film)
  } 

  return (
    <div className="film-library">
      <FilmList  
        films={films} 
        handleDetailsClick={handleDetailsClick}
        handleFaveToggle={handleFaveToggle}
        faves={faves}
      />

      <Details 
        film={current} 
        isFave={faves.includes(current)}
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