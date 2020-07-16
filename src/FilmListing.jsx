import React, { useState } from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow'

const FilmListing = (props) => {

    const [filter, setFilter] = useState('all')
    
    // handleFilterClick = (filter) => {
        
    //     console.log('setting filter to ' + filter)
    //     this.setState({filter})
    // }
    
        const allFilms = props.films.map((film, i) => {
            return (
                <div className="film-row">
                <FilmRow film={film} key={`FilmRow-${i}`} />
              </div>
            )
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => {setFilter('all')}}>
                        ALL
            <span className="section-count">{props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={() => {setFilter('faves')}}>
                        FAVES
            <span className="section-count">0</span>
                    </div>
                </div>
                {allFilms}
            </div>
        );
    
}

export default FilmListing;