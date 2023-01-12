import React, { Component } from 'react'
import FilmRow from './FilmRow' 

export default class FilmList extends Component {
    render() {
        const allFilms = this.props.films.map((film, idx) => {
            return (
                <FilmRow 
                    film={film}
                    key={`FilmRow${idx}`}
                />
            )
        })

        return (
            <div className='film-list'>
                <h1 className='section-title'>FILMS</h1>
                {allFilms}
            </div>
        )
    }
}