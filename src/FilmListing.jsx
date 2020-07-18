import React, { useState } from 'react';
import FilmRow from './FilmRow';

const FilmListings = (props) => {
    const [faves, setFaves] = useState([]);

    const [filter, setFilter] = useState('all')

    const handleFilterClick = (filter) => {
        setFilter(filter)
        console.log('setting filter to ' + filter);
    }

    const handleFaveToggle = (film) => {
        //make a new array and populate it with everything 
        //from faves, will take each item from faves and
        //push it into newFaves as an item (exact copy)
        //Dope: You can add on top of then (ex: BurgerStack)
        // [...faves, add items here like you would in arr]
        let filmIndex = faves.indexOf(film)
        //f the film is found in the array, indexOf() will return an index value starting at 0.
        if (filmIndex >= 0) {
            let newFaves = [...faves];    
            newFaves.splice(filmIndex, 1) 
            setFaves(newFaves)
            console.log('removing from favs arr')
        } else {
            setFaves([film, ...faves])
            console.log('adding to favs')
        }
        console.log(faves)
    }

    // set relevant array (filmsToDisplay)
    let filmsToDisplay = filter === 'all' ? props.films : faves

    let allFilms = filmsToDisplay.map((film, i) => {
        return (
            <FilmRow film={film} key={`FilmRow-${i}`} handleDetailsClick={props.handleDetailsClick} onFaveToggle={handleFaveToggle} isFave={faves.includes(film)}  />
        )
        });

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
                onClick={() => handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}
                onClick={() => {handleFilterClick('faves')}}>
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>

            {allFilms}
        </div>
    );
}


export default FilmListings;