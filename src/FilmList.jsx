import FilmRow from './FilmRow';
import React, { useState } from 'react';


const FilmList = (props) => {

    const [faves, setFaves] = useState([])

    const [filter, setFilter] = useState('all')
    // const state = {
    //     filter: 'all'
    // }


    const handleFaveToggle = (film) => {
        let newFaves = []
        newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)

        if (filmIndex >= 0) {
            newFaves.splice(filmIndex, 1)
            console.log(`Removing ${film.title} from faves...`)
        }
        else {
            newFaves = [...newFaves, film]
            console.log(`Adding ${film.title} to faves...`)
        }
        setFaves(newFaves)
    }

    const handleFilterClick = (filterType) => {
        setFilter(filterType)
    }

    const filmsToDisplay = filter === 'faves' ? faves : props.films

    const allFilms = filmsToDisplay.map((film, idx) => {
        return (
            < FilmRow
                key={idx}
                films={film}
                handleFaveToggle={handleFaveToggle}
                isFaves={faves.includes(film)}
                handleDetailsClick={props.handleDetailsClick}

            />

        )
    })
    return (
        <>
            <div className="film-library">
                <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    <div className="film-list-filters">
                        <div className={`film-list-filter ${filter === "all" ? "is-active" : ""
                            }`} onClick={() => { handleFilterClick('all') }} name='allMovies'>
                            ALL
                            <span className="section-count">{props.films.length}</span>
                        </div>
                        <div className={`film-list-filter ${filter === "faves" ? "is-active" : ""
                            }`} onClick={() => { handleFilterClick('faves') }} name='faveMovies'>
                            FAVES
                            <span className="section-count">{faves.length}</span>
                        </div>
                    </div>

                    {allFilms}
                </div>
            </div>
        </>
    )
}

export default FilmList;