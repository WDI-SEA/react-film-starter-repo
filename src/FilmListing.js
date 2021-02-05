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
                <div className="film-list-filters">
                    <div className="film-list-filter">
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div onClick={this.handleFilterClick} className="film-list-filter">
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>

                {allFilms}
            </div>
        )
    }
}

export default FilmListing