import React, { useState } from 'react';
import FilmRow from './FilmRow';

function FilmList(props) {
  const [filter, setFilter] = useState('all');
  const [faves, setFaves] = useState([]);

  const handleFaveToggle = (film) => {
    let newFaves = [...faves];
    const filmIndex = newFaves.indexOf(film);

    if (filmIndex >= 0) {
      console.log(`revoming ${film} from favorites list`);
      newFaves.splice(filmIndex, 1);
    } else {
      console.log(`adding ${film} to favorites list`);
      newFaves = [...faves, film];
    }

    setFaves(newFaves);
  };

  const handleFilterClick = (e) => {
    setFilter(e);
  };

  const filmsToDisplay = filter === 'all' ? props.films : faves;

  const allFilms = filmsToDisplay.map((film, idx) => {
    return (
      <FilmRow
        WholeFilm={film}
        key={`film-id-${idx}`}
        isFave={faves.includes(film)}
        onFaveToggle={handleFaveToggle}
        handleDetailsClick={props.handleDetailsClick}
      />
    );
  });

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div
          onClick={() => {
            handleFilterClick('all');
          }}
          name="all"
          className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
        >
          ALLi
          <span className="section-count">{props.films.length}</span>
        </div>
        <div
          onClick={() => {
            handleFilterClick('faves');
          }}
          name="faves"
          className={`film-list-filter ${
            filter === 'faves' ? 'is-active' : ''
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

export default FilmList;

// class FilmList extends Component {

//   state={
//     filter: "all"
//   }

//   handleFilterClick=(e)=>{

//     this.setState({
//       filter: e
//     })
//   }

// render() {
//   const allFilms = this.props.films.map((film, idx) => {
//     return <FilmRow WholeFilm={film} key={`film-id-${idx}`}/>;
//   });

// return (
//   <div className="film-list">
//     <h1 className="section-title">FILMS</h1>
//     <div className="film-list-filters">
//       <div onClick={()=>{this.handleFilterClick("all")}} name="all" className={`film-list-filter ${this.state.filter === "all" ? 'is-active' : ''}`}>
//         ALL
//         <span className="section-count">{this.props.films.length}</span>
//       </div>
//       <div onClick={()=>{this.handleFilterClick("faves")}} name="faves" className={`film-list-filter ${this.state.filter === "faves" ? 'is-active' : ''}`}>
//         FAVES
//         <span className="section-count">0</span>
//       </div>
//     </div>

//     {allFilms}
//   </div>
//     // );
//   }
// }

// export default FilmList;
