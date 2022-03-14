// import { Component } from "react";
import FilmRow from "./FilmRow";
import React, { useState } from "react";

export default function FilmList({ films, handleDetailsClick }) {
  const [faves, setFaves] = useState([]);

  const [filter, setFilter] = useState("all");

  const handleFaveToggle = (filmsObject) => {
    let newFaves = [...faves];
    const filmIndex = newFaves.indexOf(filmsObject);
    if (filmIndex < 0) {
      console.log(`adding ${filmsObject.title} to faves`);
      newFaves = [...newFaves, filmsObject];
    } else {
      console.log(`removing ${filmsObject.title} from faves`);
      newFaves.splice(filmIndex, 1);
    }
    setFaves(newFaves);
  };

  const filmsToDisplay = filter === "all" ? films : faves;

  const handleFilterClick = (filter) => {
    console.log(filter);
    setFilter(filter);
  };

  const allFilms = filmsToDisplay.map((film, index) => {
    return (
      <FilmRow
        key={`filmitem=${index}`}
        film={film}
        onFaveToggle={handleFaveToggle}
        isFave={faves.includes(film)}
        handleDetailsClick={handleDetailsClick}
      />
    );
  });

  return (
    <>
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${
              filter === "all" ? "is-active" : ""
            }`}
            onClick={() => {
              handleFilterClick("all");
            }}
          >
            ALL
            <span className="section-count">{films.length}</span>
          </div>
          <div
            className={`film-list-filter ${
              filter === "faves" ? "is-active" : ""
            }`}
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
    </>
  );
}

// class FilmList extends Component {

//     state = {
//         filter: 'all'
//     }

//     handleFilterClick = (filter) => {
//         this.setState({
//             filter: filter
//         }, () => { console.log(this.state.filter) })

//     }

//   render() {
//     const allFilms = this.props.films.map((film) => {
//       return <FilmRow films={film} />;
//     });

//     return (
//       <div className="film-list">
//         <h1 className="section-title">FILMS</h1>
//         <div className="film-list-filters">
//           <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={()=>this.handleFilterClick('all')}>
//             ALL
//             <span className="section-count">{this.props.films.length}</span>
//           </div>
//           <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={()=>this.handleFilterClick('faves')}>
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
