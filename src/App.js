import './App.css'
import FilmList from './components/FilmList'
import Details from './components/Details'
import TMDB from './TMDB'
import { useState } from 'react'

export default function App(){
  const [current, setCurrent] = useState({})
  const [films, setFilms] = useState(TMDB.films)
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