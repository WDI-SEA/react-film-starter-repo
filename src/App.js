import React, { useState } from 'react';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';


function App() {

  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState([])

  const handleDetailsClick=(film)=>{

    console.log(`fetching details for ${film}`)
    setCurrent(film)
}


  return ( 
    <div className="App">
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick}/>
      <Details film={current} handleDetailsClick={handleDetailsClick} />
    </div>
  </div>
   );
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="film-library">
//           <FilmList films={TMDB.films}/>
//           <Details films={TMDB.films}/>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
