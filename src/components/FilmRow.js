import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'

export default class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log(this.props)
        console.log(`fetching details for ${film}`)
    }
  render() {
    let imga = "https://image.tmdb.org/t/p/w780" + this.props.film.poster_path
    return (
        
<div onClick={() => this.handleDetailsClick(this.props.film.title)} className="film-row">
  <Poster url={imga}
  title={this.props.film.title}
  />

  <div className="film-summary">
    <h1>{this.props.film.title}</h1>
    <p>{this.props.film.release_date}</p>
  </div>
  <Fave />
</div>
    )
  }
}
