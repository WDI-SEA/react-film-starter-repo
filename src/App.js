import './App.css'
import FilmList from './components/FilmList'
import Details from './components/Details'
import TMDB from './TMDB'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App(){
  const [current, setCurrent] = useState({})
  const [films, setFilms] = useState(TMDB.films)
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
  // console.log(popularFilmsUrl)

  useEffect(() => {
    (async () => {
      try {
        // console.log("UseEffect is firing!")
        const res = await axios.get(popularFilmsUrl)
        console.log('THIS IS RES',res)
        setFilms(res.data.results)
      } catch (error) {
        console.warn("🔥🔥🔥🔥🔥🔥API ERROR:", error)
      }
    })()
  }, [])
  
  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)

    setCurrent(film)
  }

  return (
    <div className="film-library">
      <FilmList 
      key={'FilmList'} 
      films={films}
      handleDetailsClick={handleDetailsClick}
      />

      <Details film={current}/>
      
    </div>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="film-library">
//         <FilmList films={TMDB.films}/>

//         <Details films={TMDB.films}/>
        
//       </div>
//     )
//   }
// }

// export default App