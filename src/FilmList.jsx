import React, { useState } from 'react'
import FilmRow from './FilmRow'
import FilmListingFilter from './FilmListingFilter'

export default function FilmList(props) {
    const [filter, setFilter] = useState('all')

    const handleFilterClick = (filter) => {
        setFilter(filter)
    }

    const filmsToDisplay = filter === 'all' ? props.films : props.faves

    return (
        <div className='film-list'>
            <h1 className='section-title'>FILMS</h1>

            <FilmListingFilter
                filter={filter}
                films={props.films}
                faves={props.faves}
                handleFilterClick={handleFilterClick}
            />

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