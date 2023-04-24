
import logo from './logo.svg';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';
import { useState } from 'react';





function App() {

  const [films, setFilms] = useState(TMDB.films)
  const [current,setCurrent]=useState({})
  const handleDetailsClick = film => {
    setCurrent(film)
  }
  return(
    <div className="App">
           <div className="film-library">
              <FilmList 
              films={films}
              handleDetailsClick={handleDetailsClick}
              />
              <Details film={current}/>
          </div>
      </div>
  )
}










// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="film-library">
//           <FilmList films={TMDB.films}/>
//           <Details films={TMDB.films}/>
//       </div>
//       </div>
//     );
//   }
// }

export default App;