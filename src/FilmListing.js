import React, { Component } from 'react';
import FilmRow from './FilmRow'

class FilmListing extends Component {
    render() {
    const allFilms = this.props.films.map((film) => {
        return (
            <FilmRow film={film.title}/>
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