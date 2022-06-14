import React, { useState } from 'react';
import FilmRow from './FilmRow';

function FilmList(props) {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    const handleFaveToggle = (film) => {
        console.log("toggle fave here")
        let newFaves = [...faves];
        const filmIndex = newFaves.indexof(film)
        
        if(filmIndex === -1){
            console.log(`ADDING ${film.title} TO FAVES`)
            newFaves = [...newFaves, film]
        } else {
            console.log(`REMOVING ${film.title} TO FAVES`)
            newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)

    }

    const handleFilterClick = (filter) => {
        console.log(filter, "fave  filter clicked")
        setFilter(filter)
    }

    // console.log(this)
    const films = props.films
    const allFilms = films.map((film, i) => {
        return (
            <FilmRow 
            film={film}
            key={`film-${i}`}
            onFaveToggle={handleFaveToggle} 
            />
        )
    })
    return (
        <div className="film-list">
            <p>{filter}</p>
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className="film-list-filter" onClick={() => handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className="film-list-filter" onClick={() => handleFilterClick('faves')}>
                    FAVES
                    <span className="section-count">0</span>
                </div>
            </div>

            {allFilms}
        </div>

    )

}

export default FilmList;