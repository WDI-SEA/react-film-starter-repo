import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {

    handleDetailsClick = (film) => {
        console.log(`fetching deets for ${film}`)
    }

    render() {
        return (
            <div onClick={() => this.handleDetailsClick(this.props.film.title)} className='film-row'>
                <FilmPoster film={this.props.film} />

                <div className='film-summary'>
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.substring(0,4)}</p>
                    <Fave />
                </div>
            </div>
        )
    }
}

export default FilmRow