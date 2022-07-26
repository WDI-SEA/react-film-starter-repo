import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'

class FilmRow extends Component {

    handleDetailsClick = (film)  => {
        console.log(`printing details for ${film}`)
        // this.setState({
        //     filter: e
        // })
    }

    render () {
        const posterUrl = "https://image.tmdb.org/t/p/w780/" + this.props.film.poster_path
        const year = this.props.film.release_date.substring(0, 4)

        return (
            <div 
                className="film-row"
                onClick={ () => {this.handleDetailsClick(this.props.film.title)}}
                >
                <Poster 
                    url={posterUrl}
                    title={this.props.film.title}
                />

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{year}</p>
                </div>

                <Fave />
            </div>
        )
    }
}

export default FilmRow