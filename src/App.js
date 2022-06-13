// import React, { Component } from 'react';
import FilmList from './components/FilmList'
import Details from './components/Details'
import TMDB from './TMDB'

// class App extends Component {
//   render() {
//     const films = TMDB.films
//     return (
//       <div className="film-library">
//         <FilmList films={films}/>

//         <Details films={films}/>
//       </div>
//     );
//   }
// }

const App = () => {
  const films = TMDB.films
  return (
    <div className='film-library'>
      <FilmList films={films} />
      <Details films={films} />
    </div>
  )
}

export default App
