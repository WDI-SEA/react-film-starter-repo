import React, { Component } from "react";
import Poster from "./Poster";
import Fave from "./Fave";

const FilmRow = (props) => {
  const film = props.film;

  return (
    <>
      <div className="film-row">
        <Poster
          title={film.title}
          url={`https://image.tmdb.org/t/p/w780/${film.poster_path}`}
        />

        <div className="film-summary">
          <h1>{film.title}</h1>
          <p>{film.release_date.split("", 4)}</p>
        </div>
        <Fave />
      </div>
    </>
  );
};

export default FilmRow;

// export default class FilmRow extends Component {
//   render() {
//     const film = this.props.film;

//     return (
//       <>
//         <div className="film-row">
//           <Poster
//             title={film.title}
//             url={`https://image.tmdb.org/t/p/w780/${film.poster_path}`}
//           />

//           <div className="film-summary">
//             <h1>{film.title}</h1>
//             <p>{film.release_date.split("", 4)}</p>
//           </div>
//           <Fave />
//         </div>
//       </>
//     );
//   }
// }
