import React, {useState} from 'react'
import FilmRow from './FilmRow';

// FUNCTION IT UP
// STEP 3 END OF GOAL 1 OF PART 3 --ADDING FAVE
// AS THE STATE STORED IN APP.JS PARENT PASS IT ONTO CHILD COMPONENT WITH PROPS
export default function FilmList(props) {

  const [filter, setFilter] = useState('all');
  // STEP 3-ADD FAVE STATE AS EMPTY ARRAY
  const [faves, setFaves] = useState([])

// GOAL 2: MOVE THE FAVE EVENT HANDLER UP THE COMPONENT TREE 
// --STEP 1: REMOVE STATE SETTLER OUT OF HTE FAVE COSNTRUCTOR AND MOVE IT CAUSE IT IS AT THE BOTTOM OF THE HIERARCHY SO WOULDNT NOW ANYTHING IS GETTING FAVORITED --When a user favorites a film, that information needs to be shared with the FilmList component and all it's children in order to properly filter the list.
// STEP 4: DEFINE handleFaveToggle in this component -- it expects a prop so create its function
const handleFaveToggle = film => {
  // The handleFaveToggle function should accept a film object as an argument (this will be the film that the user is toggling).
      // STEP 5 --CLONE FAVE STATE
    // Inside handleFaveToggle, use the JavaScript slice() method to make a copy and store it in a let variable called newFaves
  let newFaves = [...faves]
  // STEP 6 -- FIND THE INDEX OF PASSED FILM IN THE FAVES ARRAY
  const filmIndex = newFaves.indexOf(film); //store the position of the fim in the array of filIndex
  //if th films currently looked is not on faves  indexOf() will return an index of -1 ---If the film is found in the array, indexOf() will return an index value starting at 0.
  // fave icon, the handleClick function will instead call onFaveToggle to add/remove that film from the faves array in App.js

   // STEP 7 -- SETUP A CONDITIONAL FOR ADDING AND REMOVING FILM FROM FAVES --
  if (filmIndex < 0) {  //If the film is not in their favorites, then when the user clicks the button, they want to add it to their favorites. You need to add it to the newFaves array SPREAD OPERATOR OR PUSH
    console.log(`${film.title} is the new fave`)
    newFaves = [...newFaves, film]
  } else { //If the film is already in their favorites, then when the user clicks the button, they want to remove it from their favorites. You need to take it out of the newFaves array.
    console.log(`${film.title} is removed from fave`)
    // STEP 8 -- Change whether the film is in faves to update the state of fave
    //TO REMOVE BY SPLICE METHOD by USING setFaves--
    newFaves.splice(filmIndex, 1)
  }
  // STEP 9 -- setFaves to update the state of faves
  setFaves(newFaves)
}

// FILTER EVENT
const handleFilterClick = filter => {
  console.log(`Setting filter to ${filter}`)
  setFilter(filter)
}
// TASK 4 -- add a conditional t omake the filter work
// the listing only shows films in the fave array otherwise shows all
// TURNERY STATEMENT TO RETURN ALL THE FILMS OR JUST FAVES
// define cosntant called
const filmsToDisplay = filter === "all" ? props.films : faves;
// CHANGGE YOUR allFilms map function to be called isntead of this.props.films
// STEP 10 --PASSING handleFaveToggle FUNCTION TO FILMROW THROUGH PROPS
const allFilms = filmsToDisplay.map((film, i) => (
  // STEP 12 -- PASS ISFAVE DOWN FROM FILMLIST THROUGH FILM ROW
  <FilmRow 
  // filmrow doesnt know about faves array but its parent filmlist does
    film = {film} 
    key = {`filmRow-${i}`} 
    // passing it along  the favorite toggle function
    onFaveToggle = {handleFaveToggle} 
    // fave conmponent expecting to receive a prop called isFave
    // isFave prop should be true orfalse depending on whether the films in the faves array
    isFave = {faves.includes(film)} //to determine if the iflm is in the faves array or not
    // TASK 3 -- PASS THE EVENT from app.js as a prop
    handleDetailsClick = {props.handleDetailsClick}
  /> 
))
         return (
            <div className="film-list">
              <h1 className="section-title">FILMS</h1>

              <div className="film-list-filters">
                    <div 
                    className={`film-list-filter ${filter === 'all' ? 'is-active': ''}`}
                    onClick={() => handleFilterClick("all")} 
                    >
                  ALL
                  <span className="section-count">{props.films.length}</span>
                </div>

                <div 
                className={`film-list-filter ${filter === 'faves' ? 'is-active': ''}`}
                onClick={() => handleFilterClick("faves")}
                >
                  FAVES
                  <span className="section-count">{faves.length}</span>
                </div>

              </div>    
              {allFilms}
            </div>
          );
        }
      


// import { Component } from "react";
// import Details from "./Details"
// import FilmRow from './FilmRow';

// export default class FilmList extends Component {
//     state= {
//         filter: "all"
//     }
//         handleFilterClick = (e) => {
//             this.setState({
//                 filter: e
//             })
//         }    
//     render() {
//         const allFilms = this.props.films.map((film, idx) => {
//             return <FilmRow WholeFilm={film} />              
//         });       
//         return (
//             <div className="film-list">
//               <h1 className="section-title">FILMS</h1>
//               <div className="film-list-filters">
//                     <div onClick={() =>{this.handleFilterClick("all")}} name="all" className="film-list-filter">
//                   ALL
//                   <span className="section-count">{this.props.films.length}</span>
//                 </div>
//                 <div onClick={() =>{this.handleFilterClick("all")}} name="all" className="film-list-filter">
//                   FAVES
//                   <span className="section-count">0</span>
//                 </div>
//               </div>    
//               {allFilms}
//             </div>
//           );
//         }
//       }