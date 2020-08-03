import React, { Component, useEffect, useState } from 'react';
import FilmRow from './FilmRow';

function FilmListing(props) {
    // constructor() {
    //     super()
    //     state = {
    //         filter: 'all',
    //     }
    // }
    const [filter, setFilter] = useState('all')
    // const [state, setState] = useState('faves')
    const [faves, setFaves] = useState([])

    const handleFilterClick = filter => {
        console.log(`Setting filter to ${filter}`)
        setFilter(filter) //this is the same as {filter: filter} when is was { filter }
    }
    const onFaveToggle = (film) => {
        //make a copy of faves check if a film is in faves
        let newFaves = [...faves]
        let faveIndex = faves.indexOf(film)
        //if film is in faves array take it out
        if (faveIndex >= 0) {
            newFaves.splice(faveIndex, 1)

        } else {
            // ELSE PUT IT IN THE ARRACY
            newFaves = [...newFaves, film]
        }

        //set faves equal to out new mutated array
        setFaves(newFaves)
    }

    //set relevant array (filmsToDisplay)
    let filmsToDisplay = filter === 'all' ? props.films : faves
    // pass on favetoggle ans isfave to filmRow
    const allFilms = filmsToDisplay.map((film, i) => (
        <FilmRow
            key={`filmRow-${i}`}
            film={film}
            handleDetailsClick={props.handleDetailsClick}
            onFaveToggle={onFaveToggle}
            isFave={faves.includes(film)}
        />))

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => handleFilterClick('all')}>
                    ALL
            <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={() => handleFilterClick('faves')}>
                    FAVES
            <span className="section-count">{faves.length}</span>
                </div>
            </div>
            {allFilms}
        </div>
    );
}


export default FilmListing;