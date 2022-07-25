import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmList extends Component {
  render() {
      let allFilms = this.props.films.map((i) => {
        return <FilmRow film={i}/>
      })
    return (
        <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <h1>{allFilms}</h1>
      </div>
    )
  }
}
