import React, { useState } from 'react'
import FilmRow from './FilmRow'

export default function FilmList(props) {
    const [filter, setFilter] = useState('all')

    const handleFilterClick = (filter) => {
        setFilter(filter)
    }

    const filmsToDisplay = filter === 'all' ? props.films : props.faves

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
                    <span className='section-count'>{props.faves.length}</span>
                </div>
            </div>

            {filmsToDisplay.map((film, i) => {
                return (
                    <FilmRow
                        film={film}
                        key={`film${i}`}
                        onFaveToggle={props.handleFaveToggle}
                        isFave={props.faves.includes(film)}
                        handleDetailsClick={props.handleDetailsClick}
                    />
                )
            })}
        </div>
    )
}