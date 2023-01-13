import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'

export default class FilmRow extends Component {
  render() {
    const releaseDate = new Date(this.props.film.release_date)
    const year = releaseDate.getFullYear()
    return (
      <div className="film-row">
        <Poster posterPath={this.props.film.poster_path} alt={this.props.film.title}/>
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{year}</p>
        </div>
      <Fave />
      </div>
    )
  }
}