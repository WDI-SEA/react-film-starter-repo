import React, {useState} from 'react'
import Details from './Details';
import FilmList from "./FilmList";
import TMDB from './TMDB'

// FUNCTION IT UP
// PART 3
//STEP 1-2 OF GOAL 1-- adding data to users fave movie list and filter the movies selected --lift the sate upwards so all the data would be shared accross components: unidirectional flow that is only going to go down the component tree -- fFind anwhere where there are two or more sibling components that need information about the same state; the state should reside in the parent of those components so it can be passed downward to all of them.

export default function App() {
  // adding state to the approppriate components of holding two pieces of info
  // passing state values of intiialized variables to set mutable data
  const [films, setFilms] = useState(TMDB.films);
  // passing data to empty array for a film
  const [current, setCurrent] = useState({})

  // TASK 3 -- MOVE DETAILS EVENT HANDLER TO HERE UP COMPONENT TREE
// move the handleDetailsClick to show details of mvie from filmrow to here, since this is the aprent of both filmlist and details
  const handleDetailsClick = film => { //will change the current  state
    console.log(`details of ${film.title}`)
    setCurrent(film)
  }
  // filmList need the films prop and Details need currently selected film prop
  return (
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick}/>
      <Details film={current}/>
      </div>
  )
}

// import React, { Component } from 'react';
// import './App.css';
// import Details from './Details';
// import FilmList from "./FilmList";
// import TMDB from './TMDB'

// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <div className="film-library">
//      <FilmList films={TMDB.films}/>
//      <Details films={TMDB.films}/>
//      </div>
//     </div>
//     )
//   }
// }