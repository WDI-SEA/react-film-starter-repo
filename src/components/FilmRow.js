import React, { Component } from 'react'
import Fave from './Fave'
import Poster
 from './Poster'
export default class FilmRow extends Component {

  handleDetailsClick(film){
    console.log("details for " + film)
  }
  
  render() {
    const posterUrl = "https://image.tmdb.org/t/p/w780/" + this.props.film.poster_path
    
    return (
        <div className="film-row" onClick={() =>{this.handleDetailsClick(this.props.film.title)}}>
        
        <Poster url={posterUrl} />
        <div className="film-summary">
            <h1>{this.props.film.title}</h1>
            <p>{this.props.film.release_date.split("-")[0]}</p>
        </div>
        <Fave/>
        </div>
    )
  }
}
