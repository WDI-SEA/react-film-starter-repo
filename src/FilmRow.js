import React, { Component } from 'react'
import Poster from './Poster'

export default class FilmRow extends Component {
    render() {
        let date = this.props.film.release_date.substring(0,4)
        return (
            <div className="film-row">
                <Poster URL={this.props.film.poster_path} title={this.props.film.title} />

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{date}</p>
                </div>
            </div>
        )
    }
}