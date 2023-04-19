import React, { Component } from 'react'
import Poster from "./Poster"
import Fave from "./Fave"

export default class FilmRow extends Component {
    render() {
        const { film } = this.props;
        const year = film.release_date.split('-')

        return (
            <div className="film-row">
                <Poster url={film.poster_path} title={film.title} />
                <div className='film-summary'>
                    <h1>{film.title}</h1>
                    <p>{year[0]}</p>
                </div>
                <div className="film-row-fave add_to_queue"
                onClick={}>
                    <p className="material-icons">add_to_queue</p>
                </div>
            </div>
        )
    }
}