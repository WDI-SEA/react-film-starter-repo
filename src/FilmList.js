// import React, { Component } from 'react'
// import FilmRow from './FilmRow'
// // import Poster from './Poster'

// export default class FilmList extends Component {
//     state = {
//         filter: 'all'
//     }
//   // we want to pass down the filterValue
//   // we also want to pass down the handleFilterChange
//     handleFilterClick = (e) => {
//         // e.preventDefault()
//         this.setState({
//             filter: e
//         })
//         console.log(`${e} was clicked`)
//     }

//   render() {
//       const allFilms = this.props.films.map((film, index) => {
//           return (
//               <FilmRow key={index} film={film}/>
//           )
//       })
//       return (
//           <>
//               <div className="film-list">
//                   <h1 className="section-title">FILMS
//                   </h1>
//                   <div className="film-list-filters">
//         <div onClick={() => this.handleFilterClick('all')} className="film-list-filter">
//             ALL
//             <span className="section-count">{this.props.films.length}</span>
//         </div>
//         <div onClick={() => this.handleFilterClick('all')}className="film-list-filter">
//             FAVES
//             <span className="section-count">0</span>
//         </div>
//     </div>
//                   {allFilms}
//               </div>
//           </>
//       )
//   }
// }

import React, { Component } from "react";
import FilmRow from './FilmRow';

class FilmList extends Component {
  
  state = {
    filter: 'all'
  }

  handleFilterClick = (e) => {
    // e.preventDefault()
    console.log(`filter clicked ${e}`)
    this.setState({ filter: e })
  }
  
  render() {
    const allFilms = this.props.films.map((movie, i) => {
        return (
            <FilmRow key={i} film={movie}/>
        )
    })
    return (
      <>
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
              <div 
                className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}

                onClick={() => this.handleFilterClick('All')}
              >
                ALL
                <span className="section-count">{this.props.films.length}</span>
              </div>
              <div 
                className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}
                onClick={() => this.handleFilterClick('faves')}
              >
                FAVES
                <span className="section-count">0</span>
              </div>
          </div>
            {allFilms}
          </div>
      </>
    );
  }
}

export default FilmList;