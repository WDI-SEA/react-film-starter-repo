import React, { Component } from 'react'

class FilmPoster extends Component {
    render() {
        return (
            <div className='film-image'>
                <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt={`poster of the film ${this.props.film.title}`} />
            </div>
        )
    }
}

export default FilmPoster