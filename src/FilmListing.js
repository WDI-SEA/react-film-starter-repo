// import React, { Component } from 'react'

// import FilmRow from './FilmRow'
// export default class FilmList extends Component {
//     handleFilterClick = (filter) => {

//         this.setState({filter})
//     }
//     state = {
//         filter: 'all'
//     }
//     render() {
//         const allFilms  = this.props.films.map((film) => {
//             return (
//                 <div className="film-row">
//                 <FilmRow film={film} />
//               </div>

//             )




//         })

//         return (
//             <div className="film-list">
//             <h1 className="section-title">FILMS</h1>
//             <div className="film-list-filters">
//                 <div className="film-list-filter"
//                 onClick={()=>this.handleFilterClick('all')}
//                 >
//                     ALL
//                     <span className="section-count">{this.props.films.length}</span>
//                 </div>
//                 <div className="film-list-filter"
//                 onClick={()=>this.handleFilterClick('faves')}
//                 >
//                     FAVES
//                     <span className="section-count">0</span>
//                 </div>
//             </div>

//             {allFilms}
// </div>

//         )
//     }
// }

import React, { useState } from 'react';
import FilmRow from './FilmRow.js';

function FilmListing (props) {

    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])



  const handleFilterClick = filter => {

    setFilter(filter)
  }
  const handleFaveToggle = (film) => {
    let newFaves = [...faves]
    const filmIndex = newFaves.indexOf(film)
    if (filmIndex < 0) {
      newFaves = [...newFaves, film]
    } else {
      newFaves.splice(filmIndex, 1)
    }
    setFaves(newFaves)
  }
    // ask bout this
    let filmsToDisplay = filter === 'all' ? props.films : faves;
    const allFilms = filmsToDisplay.map((film, i) => (
    <FilmRow
      film={film}
      key={`filmRow-${i}`}
      handleDetailsClick={props.handleDetailsClick}
      isFave={faves.includes(film)}
      handleDetailsClick={props.handleDetailsClick}
      />)
    )
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => handleFilterClick('all')}>
            ALL
            <span className="section-count">{props.films.length}</span>
          </div>
          <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={() => handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{faves.length}</span>
          </div>
      </div>

      {allFilms}
    </div>
    );

}

export default FilmListing;
