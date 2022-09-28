import React, { useState } from 'react'
import FilmRow from './FilmRow'

export default function FilmList(props) {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    const handleFilterClick = (filter) => {
        setFilter(filter)
    }

    const handleFaveToggle = (film) => {
        let newFaves = faves.slice()
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex >= 0) {
            newFaves.splice(filmIndex, 1)
        } else {
            newFaves.push(film)
        }
        setFaves(newFaves)
    }

    const filmsToDisplay = filter === 'all' ? props.films : faves

    return (
        <div className='film-list'>
            <h1 className='section-title'>FILMS</h1>

            <div className='film-list-filters'>
                <div
                    className={`film-list-filter${filter === 'all' ? ' is-active' : ''}`}
                    onClick={() => handleFilterClick('all')}
                >
                    ALL
                    <span className='section-count'>{props.films.length}</span>
                </div>

                <div
                    className={`film-list-filter${filter === 'faves' ? ' is-active' : ''}`}
                    onClick={() => handleFilterClick('faves')}
                >
                    FAVES
                    <span className='section-count'>{faves.length}</span>
                </div>
            </div>

            {filmsToDisplay.map((film, i) => {
                return (
                    <FilmRow
                        film={film}
                        key={`film${i}`}
                        onFaveToggle={handleFaveToggle}
                        isFave={faves.includes(film)}
                        handleDetailsClick={props.handleDetailsClick}
                    />
                )
            })}
        </div>
    )
}