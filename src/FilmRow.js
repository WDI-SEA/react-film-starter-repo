import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {

    handleDetailsClick = (film) => {
        console.log('Fetching details for' + film)
    }

    render() {
        return(
            <div onClick={this.handleDetailsClick} className="film-row">
                <FilmPoster poster={this.props.film.poster_path} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date}</p>
                </div>
                <Fave />
            </div>
        )
    }
}

export default FilmRow