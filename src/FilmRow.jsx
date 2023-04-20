import React, { Component } from 'react'
import Poster from "./Poster"
import Fave from "./Fave"

export default class FilmRow extends Component {

    handleDetailsClick = (film) => {
        console.log(`fetching details for ${film.title}`)
    }

    render() {
        const { film } = this.props;
        const year = film.release_date.split('-')

        return (
            <div className="film-row" onClick={()=> { this.handleDetailsClick(this.props.film)}}>
                <Poster url={film.poster_path} title={film.title} />
                
                <div className='film-summary'>
                    <h1>{film.title}</h1>
                    <p>{year[0]}</p>
                </div>

                <Fave />
            </div>
        )
    }
}