import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers'
import React, { useState } from 'react'
import FilmRow from './FilmRow'


export default function FilmList(props) {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    //handlers 
    const handleFilterClick = (e) => {
        setFilter({
            filter: e
        })
    }

    const handleFaveToggle = (film) => {
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex < 0) {
            console.log(`Adding ${film.title} to faves`)
            newFaves = [...newFaves, film]
        } else {
            console.log(`Removing ${film.title} from faves`)
            newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)
    }
    const filmsToDisplay = filter === "all" ? props.films : faves;

    const allFilms = filmsToDisplay.map((film, i) => {
        return (
            <div key={film.id}>
                <FilmRow
                    key={`film${i}`}
                    film={film}
                    handleFaveToggle={handleFaveToggle}
                    isFave={faves.includes(film)}
                    handleDetailsClick={props.handleDetailsClick}
                />
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
    )
}