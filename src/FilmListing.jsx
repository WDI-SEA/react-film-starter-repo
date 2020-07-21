import React, { useState } from 'react';
import FilmRow from './FilmRow';


const FilmListing = (props) => {
    const [faves, setFaves] = useState([])
    // to start this wants to load all the films and then toggles to faves
    // later we can change this all --> 'faves',
    // use these keywords to decide what's showing
    const [filter, setFilter] = useState('all')
    const filmsToDisplay = filter === 'all' ? props.films : faves


    const handleFaveToggle = (films) => {
        /************
         * React doesn't like traditional methods of doing this, 
         * and would trigger a rerender
        */
        let newFaves = [ ...faves]
        const filmIndex = newFaves.indexOf(films)
        if (filmIndex > 0) {
            newFaves = [...newFaves, films]
        } else {
            newFaves.splice(filmIndex, 1)
        }
        setFaves([newFaves])
    }


    let allFilms = filmsToDisplay.map((film, i) => {
        return (
            <FilmRow className="film-row"
            film={film} key={`filmRow-${i}`}
            onFaveToggle={handleFaveToggle}
            isFave={faves.includes(film)}
            handleDetailsClick={props.handleDetailsClick}/>
        )
    })

    return (
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
            <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} 
            onClick={() => setFilter('all')}>
                ALL
                <span className="section-count">{props.films.length}</span>
            </div>
            <div onClick={() => setFilter('faves')} 
            className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}>
                FAVES
                <span className="section-count">0</span>
            </div>
          </div>
          {allFilms}
        </div>
    )
}

export default FilmListing;

