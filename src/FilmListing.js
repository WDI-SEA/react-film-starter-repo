import React, { useState } from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow'

const FilmListing = (props) => {

    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    const handleFaveToggle = (film) => {
        console.log('Toggled a fave')
        // let result = e.target.name
        // let newFaves = [ ...faves]
        let filmIndex = faves.indexOf(film)
        if(filmIndex >= 0) {
            console.log('removing from favorites array')
            newFaves.splice(filmIndex, 1)
            let newFaves = [ ...faves]
            setFaves(newFaves)
        } else {
             console.log('adding to faves list')
             setFaves([film, ...faves])
        }
    }


    const handleFilterClick = filter => {
        console.log(filter)
        setFilter({filter})
    }
 
        const allFilms = props.films.map( (film, i) => {
            return (
                <FilmRow film={film} key={`filmRow-${i}`} onFaveToggle={handleFaveToggle} />
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
                    <span className="section-count">0</span>
                </div>
            </div>
            {allFilms}
        </div>
        );
}

export default FilmListing;