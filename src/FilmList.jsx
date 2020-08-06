import React, { useState } from 'react';
import FilmRow from './FilmRow'

const FilmList = (props) => {
    
    const [filter, setFilter] = useState('all')
    //step add a faves state to filmlisting.js as an empty array 
    const[faves, setFaves] = useState([])
    
    const handleFilterClick = (filter) => {
        setFilter(filter)
    }

    // step 8: you want splice() instead of slice() from part3 instructions
    const onFaveToggle = film => {
        let newFaves = [...faves]
        let faveIndex = faves.indexOf(film)
        if (faveIndex >= 0) {
            newFaves.splice(faveIndex, 1)
        } else {
            newFaves = [...newFaves, film]
        }
        setFaves(newFaves)
    }

    let filmsList = filter === 'all' ? props.films : faves

    const allFilms = filmsList.map((film, i) => {
        return <FilmRow film={film} key={`FilmRow-${i}`} isFave={faves.includes(film)} onFaveToggle={onFaveToggle} handleDetailsClick={props.handleDetailsClick}/>
    })

    return (
        <div className="film-list">
            <h2 className="section-title">Film List</h2>
            <div className="film-list-filters">
                <div 
                className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
                onClick={() => handleFilterClick('all')}
                >
                    All
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div 
                className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}
                onClick={() => handleFilterClick('faves')}
                >
                    Faves 
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>
            {allFilms}
        </div>
    );
}

export default FilmList;