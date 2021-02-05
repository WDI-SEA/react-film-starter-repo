import React, { Component } from 'react'
import FilmRow from './FilmRow'

class FilmListing extends Component {

    handleFilterClick = (filter) => {
        console.log('Setting filter to' + filter)
    }

    render() {
        let allFilms = this.props.films.map((film, i) => {
            return <FilmRow film={film} key={i}/>
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