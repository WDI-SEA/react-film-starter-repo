import React, { Component } from 'react'
import Poster from './Poster'

export default class FilmRow extends Component {
    render() {
        return (
            <div className='film-row'>
                <Poster 
                    url={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`}
                    alt={this.props.film.title}
                />

                <div className='film-summary'>
                    <h1>{this.props.film.title}</h1>

                    {/* <p>{this.props.film.release_date.split('-')[0]}</p> */}
                    {/* <p>{new Date(this.props.film.release_date).getFullYear()}</p> */}
                    <p>{this.props.film.release_date.substring(0, 4)}</p>
                </div>
            </div>
        )
    }
}