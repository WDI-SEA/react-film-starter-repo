import React, { Component } from 'react'
import Poster from './Poster'

class FilmRow extends Component {
    render() {
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        const year = this.props.film.release_date.substring(0, 4)
        return(
            <div className='film-row'>
                <Poster posterUrl={posterUrl} alt={this.props.film.title}/>
                <div className='film-summary'>
                    <h1>{this.props.film.title}</h1>
                    <p>{year}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow