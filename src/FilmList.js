import { useState } from 'react'

import FilmRow from './FilmRow'

export default function FilmList(props) {
    const [filterState, setFilterState] = useState({
        filter: "all"
    })

    const handleFilterClick = (type) => {
        setFilterState({
            filter: type
        })
    }

    const allFilms = props.films.map((film, i) => {
        return (
            <FilmRow
                film={film}
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
                    <span className="section-count">0</span>
                </div>
            </div>
            {allFilms}
        </div>
    )

}