import { useState } from 'react'
import FilmRow from './FilmRow'

export default function FilmList(props) {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    const handleFaveToggle = film => {
        console.log('fave this film:', film)
        // make a copy of the array from state
        const newFaves = [...faves]
        const filmIndex = faves.indexOf(film)
        if (filmIndex === -1) {
            // we need to add the film to the faves
            setFaves([...faves, film])
            console.log('adding', film)
        } else {
            // we need to remove the film from the faves
            newFaves.splice(filmIndex, 1)
            setFaves(newFaves)
            console.log('removing', film)
        }
    }

    const filmsToDisplay = filter === "all" ? props.films : faves

    const allFilms = filmsToDisplay.map((film, i) => {
        return (
            <FilmRow 
                key={`filmrow${i}`}
                film={film}
                onFaveToggle={handleFaveToggle}
                isFave={faves.includes(film)}
                handleDetailsClick={props.handleDetailsClick}
            />
        )
    })

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>

            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'fave' ? 'is-active' : ''}`}
                    onClick={() => setFilter('fave')}
                >
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>

            {allFilms}
        </div>
    )
}