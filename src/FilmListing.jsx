import React, { useState } from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow'
import Fave from './Fave'



// const [faved, setFaved] = useState(false)

const FilmListing = (props) => {

    const [faves, setFaves] = useState([])
    const [filter, setFilter] = useState('all')
    const handleFaveToggle = (film) => {
        
    }
    const handleFilterClick = (filter) => {
        
        console.log('setting filter to ' + filter)
        setFilter(filter)
    }
   
    const onFaveToggle = (film) => {

        //make copy of outfaves
        let newFaves = [...faves];
        //check if film is in faves
        let faveIndex = faves.indexOf(film);
        
        if (faveIndex >= 0) {
            //if film is in faves array, take it out
            newFaves.splice(faveIndex, 1);

        } else {
             //else put it in the array
             newFaves = [...newFaves, film]
        }
        //set faves equal to new mutated array 
        setFaves(newFaves)
    }

    //set relevant array (filmsToDisplay)
        let filmsToDisplay = filter === 'all' ? props.films : faves;

        const allFilms = filmsToDisplay.map((film, i) => {
            return (
                <div className="film-row">
                <FilmRow film={film} key={`FilmRow-${i}`} handleDetailsClick={props.handleDetailsClick} onFaveToggle={onFaveToggle} isFave={faves.includes(film)}/>
              </div>
            )
        })
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