import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {

  handleDetailsClick = (film) =>{
    console.log(`fetching details for ${film}`)
  }


  render() {
    // let releaseDate = new Date(this.props.film.release_date)
    return(
      <div onClick={() => this.handleDetailsClick(this.props.film.title)} className='film-row'>
        <FilmPoster poster={this.props.film.poster_path} alt={this.props.film.title}/>
        {/* <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}` }alt=''/> */}
        <div className='film-summary'>
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.release_date.split('-')[0]}</p>
          {/* <p>{this.props.film.release_date.substring(0,4)}</p> */}
          {/* <p>{releaseDate.getFullYear()}</p> */}
        </div>
        <div>
          <Fave />
        </div>
      </div>
    )
  }
}

export default FilmRow