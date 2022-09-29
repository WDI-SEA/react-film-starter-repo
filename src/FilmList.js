import { useState } from 'react'
import FilmRow from './FilmRow'

export default function FilmList(props) {
    const [filterState, setFilterState] = useState({
        filter: "all"
    })

    const [faves, setFaves] = useState([])

    const handleFilterClick = (type) => {
        setFilterState({
            filter: type
        })
    }

    const handleFaveToggle = (film) => {
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        if(filmIndex < 0) {
            console.log(`adding ${film.title} to faves...`)
            setFaves([
                ...faves, 
                film
            ])
        } else if(filmIndex >= 0) {
            console.log(`removing ${film.title} from faves...`)
            newFaves.splice(filmIndex, 1)
            setFaves(newFaves)
        }
    }

    const filmsToDisplay = filterState.filter === "all" ? props.films: faves;

    const allFilms = filmsToDisplay.map((film, i) => {
        return (
            <FilmRow
                film={film}
                onFaveToggle={handleFaveToggle}
                isFave={faves.includes(film)}
                handleDetailsClick={props.handleDetailsClick}
                key={`film${i}`}
            />
        )
    })

    

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filterState.filter === 'all' ? 'is-active' : ''}`} onClick={() => handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filterState.filter === 'faves' ? 'is-active' : ''}`} onClick={() => handleFilterClick('faves')}>
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>
            {allFilms}
        </div>
    )

}