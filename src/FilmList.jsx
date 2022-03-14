// import React, { Component } from "react";
import FilmRow from "./FilmRow";
import React, { useState } from 'react'

// class FilmList extends Component {
//   state = {
//     filter: "all",
//   };

//   handleFilterClick = (filter) => {
//     // e.preventDefault()
//     console.log(filter);
//     this.setState({
//       filter: filter,
//     });
//   };

//   render() {
//     const allFilms = this.props.films.map((film, index) => {
//       return (
//         <FilmRow
//           // key={index}
//           // title={film.title}
//           // releaseDate={film.release_date}
//           // poster_path={film.poster_path}
//           film={film}
//         />
//       );
//     });
//     return (
//       <div className="film-list">
//         <h1 className="section-title">FILMS</h1>
//         <div className="film-list-filters">
//           <div
//             className={`film-list-filter ${
//               this.state.filter === "all" ? "is-active" : ""
//             }`}
//             onClick={() => {
//               this.handleFilterClick("all");
//             }}
//           >
//             ALL
//             <span className="section-count">{this.props.films.length}</span>
//           </div>
//           <div
//             className={`film-list-filter ${
//               this.state.filter === "faves" ? "is-active" : ""
//             }`}
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

// refactor to functional component

export default function FilmList({ films, handleDetailsClick }) {
  const [filter, setFilter] = useState('all')

  const [faves, setFaves] = useState([])

  const handleFaveToggle = film => {
    let newFaves = [...faves]
    const filmIndex = newFaves.indexOf(film)

    if (filmIndex < 0 ) {
      console.log(`Adding ${film.title} to faves`)
      newFaves = [...faves, film]
    } else {
      console.log(`Removing ${film.title} from faves`)
      newFaves.splice(filmIndex, 1)
    }
    setFaves(newFaves)
  }


  const filmsToDisplay = filter === 'all' ? films : faves

  const allFilms = filmsToDisplay.map((film, index)=> {
    return(
      <FilmRow 
        key={`Film ID: ${index}`}
        film={film}
        onFaveToggle={handleFaveToggle}
        isFave={faves.includes(film)}
        handleDetailsClick={handleDetailsClick}
      />
    )
  })

  return (
    <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${filter.filter === "all" ? "is-active" : ""}`}
            onClick={()=>setFilter('all')}
          >
            ALL
            <span className="section-count">{films.length}</span>
          </div>
          <div
            className={`film-list-filter ${filter.filter === "faves" ? "is-active" : ""}`}
            onClick={() => setFilter("faves")}
          >
            FAVES
            <span className="section-count">{faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
  )
}