import React, { Component} from 'react'
import Poster from './Poster'
import Fave from './Fave'


export default class FilmRow extends Component {
    handleDetailsClick = film => {
        console.log('fetching details for:', film.title)
    }

    render() {
        // const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`

        return (
            <div className="film-row" key={`film-${this.props.index}`} onClick={()=>this.handleDetailsClick(this.props.film)}>
                <Poster 
                    film={this.props.film}
                    posterUrl={this.props.film.poster_path}
                />

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                        <p>{this.props.film.release_date.split('-')[0]}</p>
                </div>

                <Fave />
            </div>
        )
    }
}