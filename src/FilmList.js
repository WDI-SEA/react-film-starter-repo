import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {
    render() {
        const allFilms = this.props.films.map((film,idx) => {
            return <FilmRow key={idx} film={film}/>
            // <h1>{film.title}</h1>
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        );
    }
}

export default FilmList;
