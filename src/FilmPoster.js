import React, { Component } from 'react'
import FilmRow from './FilmRow'

class FilmPoster extends Component {
    render () {
        return (
          <div className='FilmPoster'>
             <img src={`https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`} alt={this.props.film.title} /> 
          </div>  
        )
    }
}

export default FilmPoster