import React, { Component } from 'react';
import FilmRow from './FilmRow.jsx';




class FilmListing extends Component {
    render() {
    // my solve for this
    // use map to go over the films array
    // this.props.films is an object of arrays    
        let allFilms = this.props.films.map((film) => {
            return (
                <FilmRow className="film-row"
                film={film}
                />
            )
        })

        return (
            <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    {allFilms}
          </div>
        );
    }
}

export default FilmListing;