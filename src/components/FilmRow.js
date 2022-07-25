import React, { Component } from 'react'
import Poster from './Poster'

export default class FilmRow extends Component {
  render() {
    let imga = "https://image.tmdb.org/t/p/w780" + this.props.film.poster_path
    return (
        
<div className="film-row">
  <Poster url={imga}
  title={this.props.film.title}
  />

  <div className="film-summary">
    <h1>{this.props.film.title}</h1>
    <p>{this.props.film.release_date}</p>
  </div>
</div>
    )
  }
}
