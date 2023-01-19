import './App.css'
import Details from './Details'
import FilmList from './FilmList'
import TMDB from './TMDB'
import { useEffect, useState} from 'react'
import axios from 'axios'

export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  
  const handleDetailsClick = film => {
    console.log(`Printing for film: ${film.title}`)
    setCurrent(film)
  }

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;

    console.log("useEffect is firing")

    fetch(popularFilmsUrl) 
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData)
        setFilms(jsonData.results)
      })
      .catch(error => {
        console.warn(error)
      })
  }, [])

  //-------ASYNC/AWAIT-------
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`

  //       const response = await axios.get(popularFilmsUrl)
  //       console.log(response.data)
  //       setFilms(response.data.results)
  //     } catch(error) {
  //       console.warn(error)
  //     }
  //   }
  //   fetchMovies() //don't forget to invoke
  // }, [])

  return(
    <>
      <div className="film-library">
        <FilmList 
          films= {films}
          handleDetailsClick={handleDetailsClick}
        />
        <Details 
          film= {current} 
        />
      </div>

    </>
  )
}


// export default class App extends Component {
//   render() {
//     return (
        // <div className="film-library">
        //     <FilmList 
        //       films= {TMDB.films}
        //     />
        //     <Details 
        //       films= {TMDB.films} 
        //     />
        // </div>
//     )
//   }
// }
