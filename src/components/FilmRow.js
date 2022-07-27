import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'

class FilmRow extends Component {

    handleDetailsClick = (film) => {
        console.log(`fetching details for ${this.props.film.title}`)
    }

    render() {
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        const year = this.props.film.release_date.substring(0, 4)
        return(
            <div className='film-row' onClick={(film) => this.handleDetailsClick(film)}>
                <Poster posterUrl={posterUrl} alt={this.props.film.title}/>
                <div className='film-summary'>
                    <h1>{this.props.film.title}</h1>
                    <p>{year}</p>
                </div>
                <Fave/>
            </div>
        )
    }
}

export default FilmRow