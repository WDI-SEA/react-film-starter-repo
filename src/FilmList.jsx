import { useState } from 'react'
import FilmRow from './FilmRow'

export default function FilmList(props) {

    const [filter, setFilter] = useState({ filter: 'all' })
    const [faves, setFaves] = useState([])

    const handleFilterClick = (filter) => {
        console.log("a filter was clicked: " + filter)
        setFilter({
            filter
        })
    }

    const handleFaveToggle = film => {
        console.log('handling fave toggle via FilmList')
        let newFaves = [...faves]

        const filmIndex = newFaves.indexOf(film)

        if (filmIndex !== -1) {
            console.log(`Removing ${film.title} from faves...`)
            newFaves.splice(filmIndex, 1)
        } else {
            console.log(`Adding ${film.title} to faves...`)
            newFaves = [...newFaves, film]
        }

        setFaves(newFaves)
    }

    const filmsToDisplay = filter.filter === "all" ? props.films : faves

    const allFilms = filmsToDisplay.map((film, i) => (
        <FilmRow 
            key={`filmRow-${i}`} 
            film={film}
            onFaveToggle={handleFaveToggle}
            isFave={faves.includes(film)}
            handleDetailsClick={props.handleDetailsClick}
        />
    ))

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === "all" ? "is-active" : ""}`} onClick={() => handleFilterClick('all')} >
                    ALL
                    <span className="section-count">
                        {props.films.length}
                    </span>
                </div>
                <div className={`film-list-filter ${filter === "faves" ? "is-active" : ""}`} onClick={() => handleFilterClick('faves')} >
                    FAVES
                    <span className="section-count">
                        {faves.length}
                    </span>
                </div>
            </div>
            {allFilms}
        </div>
    )
}
