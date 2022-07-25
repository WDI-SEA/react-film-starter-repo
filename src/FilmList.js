import React, { Component } from 'react';
import FilmRow from './FilmRow'

class FilmList extends Component {
    render() {
        const allFilms = this.props.films.map((film, idx) => {
            return (
                <FilmRow film={film}/>
            )
        })
        return (
            <>
            <div className='film-library'>
                <div className='film-list'>
                    <h1 className='section-title'>FILMS</h1>
                    {allFilms}
                </div>
            </div>
            </>
        )
    }
}

export default FilmList