import React, { useState } from 'react';
import FilmRow from './FilmRow';

export default function FilmList(props) {
    const [faves, setFaves] = useState([])
    const [filter, setFilter] = useState("all")
    const handleFaveToggle = (film) => {
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex === -1) {
            newFaves.push(film)
            console.log(`Adding ${film.title}`)
        } else {
            newFaves.splice(filmIndex, 1)
            console.log(`Removing ${film.title}`)
        }
        setFaves(newFaves)
    }
    const handleFilterClick = (filter) => {
        setFilter(filter)
    }
    const FilmsToDisplay = filter === "all"? props.films : faves
    const Films = FilmsToDisplay.map((film, i) => {
        return ( <FilmRow 
                    key={`movie ${i}`}
                    film={film}
                    onFaveToggle={handleFaveToggle}
                    isFave={faves.includes(film)}
                    handleDetailsClick={props.handleDetailsClick}
                    />)
    })

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === 'all' ? "is-active" : ""}`} onClick={()=>handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'faves' ? "is-active" : ""}`} onClick={()=>handleFilterClick('faves')}>
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>
            {Films}
        </div>
    )
}
