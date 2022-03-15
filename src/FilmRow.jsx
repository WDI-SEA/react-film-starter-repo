import React from 'react';
import Fave from './Fave';
import Poster from './Poster';

// FUNCTION IT UP
// STEP 11 -- PASS THE HandleFaveToggle function through props TO FAVE 
// TASK 3 -- MOVE THE DETAILS EVENT HANDLER UP COMPONENT TREE BUT PASS IT HER AS A PROP
// --In the onClick of FilmRow, call props.handleDetailsClick in an anonymous function and pass it props.film.
// wrap it in an anonymous arrow function so you can include the current film as a parameter.
export default function FilmRow (props) {
  return(
      <div 
      onClick={()=>{props.handleDetailsClick(props.film)}} className="film-row">
        <div>
          <Poster
            url = {
              `https://image.tmdb.org/t/p/w780/'${props.film.poster_path}`}
            title = {props.film.title}
            />
        </div>

        <div className="film-summary">
          <h1>{props.film.title}</h1>
          <h1 
          class="subtitle">
            {props.film.release_date.split('-')[0]}
          </h1>
        </div>
        <Fave onFaveToggle={() => 
        {props.onFaveToggle(props.film)}}
        isFave = {props.isFave}
        />
      </div>
  )
}



// import React, { Component } from 'react';
// import Fave from './Fave';
// import Poster from './Poster';
// import './App.css';

// class FilmRow extends Component {
//   state = {};

//     handleDetailsClick=(film)=>{
//         console.log(`fetching details for ${film}`)
//     }
//   render() {
//     return (
//       <div onClick={()=>{this.handleDetailsClick(this.props.WholeFilm.title)}} className="film-row">
//         <div>
//           <Poster
//             url={
//               'https://image.tmdb.org/t/p/w780/' +
//               this.props.WholeFilm.poster_path
//             }/>
//         </div>
//         <div className="film-summary">
//           <h1>{this.props.WholeFilm.title}</h1>
//           <h1 class="subtitle">
//             {this.props.WholeFilm.release_date.split('-')[0]}
//           </h1>
//         </div>
//         <Fave />
//       </div>
//     );
//   }
// }

// export default FilmRow;