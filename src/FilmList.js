import React, { Component } from 'react'
import FilmRow from './FilmRow'
// import Poster from './Poster'

class FilmList extends Component {
  // we want to pass down the filterValue
  // we also want to pass down the handleFilterChange
  render() {
      const allFilms = this.props.films.map((film, index) => {
          return (
              <FilmRow film={film}/>
          )
      })
      return (
          <>
              <div className="film-list">
                  <h1 className="section-title">FILMS</h1>
                  {/* <h1>{this.props.films[0].title}</h1> */}
                  {allFilms}
              </div>
          </>
      )
  }
}
export default FilmList