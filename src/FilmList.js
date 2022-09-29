import React, { useState } from 'react'
import FilmRow from './FilmRow'

export default function FilmList(props) {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    const handleFilterClick = (filter) => {
        console.log('handling filter click', filter)
        setFilter(filter)
    }

    const handleFaveToggle = film => {
        // faves is calling the initial state.
        let newFaves = [...faves];
        // search the newfaves in index of films
        const filmIndex = newFaves.indexOf(film);
        // if filmindex is less than 0 we need to add the film to newfaves otherwise we would need to remove the film from the newFaves array
        if (filmIndex < 0) {
          console.log(`ADDING ${film.title} TO FAVES`)
          newFaves = [...newFaves, film];
        } else {
          console.log(`REMOVING ${film.title} TO FAVES`)
          newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)
    }

    // TURNERY
    /// if X === Y ? 1stOption : 2ndOption
    // shows all films or faves when clicked category tab
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