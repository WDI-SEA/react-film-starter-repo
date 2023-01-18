import React, {Component} from 'react'
import './App.css'
import Details from './Details'
import FilmList from './FilmList'
import TMDB from './TMDB'
import {useState} from 'react'
// export default class App extends Component{
//   render(){
//     return(
//       <div className="film-library">

//   <FilmList films={TMDB.films}/>
//   <Details films={TMDB.films}/>
// </div>
//     )
//   }
// }
export default function App(){
  let [films,setFilms] = useState(TMDB.films)
  let [current,setCurrent] =  useState({})
  function handleDetailsClick(film){
    console.log(`printing for ${film}`)
    setCurrent(film)
  }
  return(
    <div className="film-library">

    <FilmList films={films} handleDetailsClick={handleDetailsClick}/>
    <Details film={current}/>
  </div>
  )
}