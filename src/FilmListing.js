import React, { Component } from 'react'

class FilmListing extends Component {
    render() {
        let allFilms = this.props.films.map((film) => {
            return (
                <div className="film-row">
                    <h1>{film.title}</h1>
                </div>
            )
        })
        return(
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        )
    }
}

export default FilmListing