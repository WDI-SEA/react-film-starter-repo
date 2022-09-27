import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'

export default class FilmRow extends Component {

    handleDetailsClick = film => {
        console.log(`Fetching details for ${film}`)
    }

    render() {
        let date = this.props.film.release_date.substring(0,4)
        return (
            <div className="film-row" onClick={() => {this.handleDetailsClick(`${this.props.film.title}`)}}>
                <Poster URL={this.props.film.poster_path} title={this.props.film.title} />

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{date}</p>
                </div>
                <Fave />
            </div>
        )
    }
}