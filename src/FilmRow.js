import React, { Component } from 'react'
import FilmPoster from './FilmPoster'

class FilmRow extends Component {
  render() {
    // let releaseDate = new Date(this.props.film.release_date)
    return(
      <div className='film-row'>
        <FilmPoster poster={this.props.film.poster_path} alt={this.props.film.title}/>
        {/* <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}` }alt=''/> */}
        <div className='film-summary'>
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.release_date.split('-')[0]}</p>
          {/* <p>{this.props.film.release_date.substring(0,4)}</p> */}
          {/* <p>{releaseDate.getFullYear()}</p> */}
        
        </div>
      </div>
    )
  }
}

export default FilmRow