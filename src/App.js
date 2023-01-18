import { useState } from 'react'
import FilmList from './FilmList';
import Details from './Details'
import TMDB from './TMDB'

function App() {

const [films, setFilms] = useState(TMDB.films)
const [current, setCurrent] = useState({})

function handleDetailsClick(film) {
  console.log('fetching details for film:', film.title)
  setCurrent(film)
}

  return (
    <div className='film-library'>
      <FilmList 
        films={films} 
        handleDetailsClick={handleDetailsClick}
      />

      <Details 
        current={current} 
        setCurrent={setCurrent}
      />
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className='film-library'>
//         <FilmList films={TMDB.films} />

//         <Details films={TMDB.films} />
//       </div>
//     );
//   }
// }

export default App;