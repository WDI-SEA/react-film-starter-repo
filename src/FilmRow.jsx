// import React, { Component } from "react";
import Fave from "./Fave";
import Poster from "./Poster";
import './App.css'

// class FilmRow extends Component {
//   handleDetailsClick = (film) => {
//     console.log("Fetching details for ${this.props.film.title");
//   };

//   render() {
//     return (
//       <div
//         className="film-row"
//         onClick={() => this.handleDetailsClick(this.props.film.title)}
//       >
//         <Poster
//           poster_path={this.props.film.poster_path}
//           overview={this.props.film.overview}
//         />
//         <div className="film-summary">
//           <h1>{this.props.film.title}</h1>
//           <p>{this.props.film.release_date.slice(0, 4)}</p>
//         </div>
//         <Fave />
//       </div>
//     );
//   }
// }

// refactor to functional component
export default function FilmRow({ film, onFaveToggle, isFave, handleDetailsClick }) {
    let imagePath = `https://image.tmdb.org/t/p/w780/${film.poster_path}`
    return (
      <div className="film-row">
        <Poster
          imgUrl={imagePath}
          alt={`Movie poster for ${film.title}`}
        />
        <div onClick={()=>handleDetailsClick(film)} className="film-summary">
            <Fave
                onFaveToggle={()=>{ onFaveToggle(film) }}
                isFave={isFave}
            />
          <h1>Title: {film.title}</h1>
          <p>Year: {film.release_date.slice(0, 4)}</p>
        </div>
      </div>
    )
}
