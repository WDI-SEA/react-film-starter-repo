import React, { useState } from 'react';
// import FilmRow from './components/FilmRow.jsx';
import Details from './components/Details.jsx';
import './App.css';
import FilmList from './components/FilmList.jsx';
import TMDB from './TMDB.js';

// class App extends Component {
//   state = {
//     TMDB,
//     films: [...TMDB.films]
//   }
//   render() {
    
   
//     return (
      
//        <div className="film-library">
//         <FilmList films={this.state.films}/>
//         <Details />
//       </div>
   
//     );
//   }
// }


const App = () => {
  const [filmsCollection, setFilmsCollection] = useState({
    films: [...TMDB.films],
    current: {}
  })
  const detailsClickHandler = (film) => {
    setFilmsCollection({...filmsCollection, current: film})
  }

  return(
    <div className="film-library">
      <FilmList films={filmsCollection.films} detailsClickHandler={detailsClickHandler} />
      <Details film={filmsCollection.current} />
    </div>
  )
}

export default App;