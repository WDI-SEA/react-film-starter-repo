// import React, { Component } from "react";
import React, { useState } from "react";
import FilmRow from "./FilmRow";

export default function FilmList({ films, handleDetailsClick }) {
  const [filter, setFilter] = useState("all");
  const [faves, setFaves] = useState([]);

  const handleFaveToggle = (film) => {
    let newFaves = [...faves];
    const filmIndex = newFaves.indexOf(film);
    if (filmIndex < 0) {
      console.log(`adding ${film.title} to faves`);
      newFaves = [...newFaves, film];
    } else {
      console.log(`removing ${film.title} to faves`);
      newFaves.splice(filmIndex, 1);
    }
    setFaves(newFaves);
  };

  const filmsToDisplay = filter === "all" ? films : faves; //this is a ternary another way to write if else statement

  const allFilms = filmsToDisplay.map((film, index) => {
    return (
      <FilmRow
        key={`filmrow-${index}`}
        film={film}
        onFaveToggle={handleFaveToggle}
        isFave={faves.includes(film)}
        handleDetailsClick={handleDetailsClick}
      />
    );
  });
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div
          name="all"
          onClick={() => setFilter("all")}
          className={`film-list-filter ${filter === "all" ? "is-active" : ""}`}
        >
          ALL
          <span className="section-count">{films.length}</span>
        </div>

        <div
          name="faves"
          onClick={() => setFilter("faves")}
          className={`film-list-filter ${
            filter === "faves" ? "is-active" : ""
          }`}
        >
          FAVES
          <span className="section-count">{faves.length}</span>
        </div>
      </div>

      {allFilms}
    </div>
  );
}

// class FilmList extends Component {
//   state = {
//     filter: 'all'
//   }

//   handleFilterClick = (e) => {
//     // console.log(e.target.id)
//     this.setState({
//       filter: e.target.id
//     })
//   }

//   render() {
//     const filmTitle = this.props.films.map((film, index) => {
//       return <FilmRow key={`filmKey=${index}`} film={film} />;
//     });
//     return (
//       <div className="film-list">
//         <h1 className="section-title">FILMS</h1>
//         <div className="film-list-filters">
//           <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active'
//           // onClick={()=>this.handFilterClick('all')}
//           : ''}`} onClick={this.handleFilterClick} id="all">
//             ALL
//             <span className="section-count">{this.props.films.length}</span>
//           </div>
//           <div className={`film-list-filter ${this.state.filter === 'faves' ?
//           // onClick={()=>this.handFilterClick('faves')}
//           'is-active' : ''}`} onClick={this.handleFilterClick} id="faves">
//             FAVES
//             <span className="section-count">0</span>
//           </div>
//         </div>

//         {filmTitle}
//       </div>
//     );
//   }
// }

// export default FilmList
