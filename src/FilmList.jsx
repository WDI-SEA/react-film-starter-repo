import FilmRow from "./FilmRow";
import React, { useState } from 'react'

export default function FilmList (props) {

  const [faves, setFaves] = useState([])
  const [filter, setFilter] = useState('all')

  const handleFaveToggle = (film) => {
    let newFaves = [...faves]
    const filmIndex = newFaves.indexOf(film)
    if (filmIndex < 0) {
      newFaves = [...newFaves, film];
      console.log(`Adding ${film.title} to faves...`)
    } else {
      console.log(`removing ${film.title} from faves...`)
      newFaves.splice(filmIndex, 1)
    }
    setFaves(newFaves)
  }

  let filmsToDisplay = filter === 'all' ? props.films : faves

  const handleFilterClick = (filter) => {
    setFilter(filter)
  }

  const allFilms = filmsToDisplay.map((film, idx) => (
    <FilmRow 
      film={film} 
      key={`filmRow-${idx}`} 
      onFaveToggle={handleFaveToggle}
      isFave={faves.includes(film)}
      handleDetailsClick={props.handleDetailsClick}
    /> 
  ))

  return (
    <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${filter === "all" ? "is-active" : ""}`}
            onClick={() => {
              handleFilterClick("all");
            }}
          >
            ALL
            <span className="section-count">{props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${filter === "faves" ? "is-active" : ""}`}
            onClick={() => {
              handleFilterClick("faves");
            }}
          >
            FAVES
            <span className="section-count">{faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
  )
}


// import React, { Component } from "react";
// import FilmRow from "./FilmRow";

// class FilmList extends Component {
//   state = {
//     filter: "all",
//   };

//   handleFilterClick = (e) => {
//     console.log(e);
//     this.setState({
//       filter: e,
//     });
//   };

//   render() {
//     const allFilms = this.props.films.map((film, idx) => {
//       return <FilmRow wholeFilms={film} />;
//     });

//     return (
//       <div className="film-list">
//         <h1 className="section-title">FILMS</h1>
//         <div className="film-list-filters">
//           <div
//             className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""}`}
//             onClick={() => {
//               this.handleFilterClick("all");
//             }}
//           >
//             ALL
//             <span className="section-count">{this.props.films.length}</span>
//           </div>
//           <div
//             className={`film-list-filter ${this.state.filter === "faves" ? "is-active" : ""}`}
//             onClick={() => {
//               this.handleFilterClick("faves");
//             }}
//           >
//             FAVES
//             <span className="section-count">0</span>
//           </div>
//         </div>

//         {allFilms}
//       </div>
//     );
//   }
// }

// export default FilmList;

