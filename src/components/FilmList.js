import React, { Component } from 'react'

export default class FilmList extends Component {
    render() {
        const allFilms = this.props.films.map(film => {
            return <div className="film-row">
                        <h1>{film.title}</h1>
                    </div>
        })
        return(
            <div>
                {allFilms}
            </div>
            
        )
    }
}