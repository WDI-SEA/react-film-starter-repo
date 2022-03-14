import FilmRow from './FilmRow';
import React, {useState} from 'react'

export default function FilmList({ films, handleDetailsClick }) {
    // state filter
    const [filter, setFilter] = useState('all')
    // state fave 
    const [faves, setFaves] = useState([])

    const handleFaveToggle = film => {
        // new array which includes the prev staet of the faves array
        let newFaves = [...faves];
        // determine if a film is in the array
        const filmIndex = newFaves.indexOf(film)

        if (filmIndex < 0) {
            console.log(`Adding ${film.title} to faves`)
            newFaves = [...faves, film]
        } else {
            console.log(`Removing ${film.title} from faves`)
            newFaves.splice(filmIndex, 1)
            // use splice method to remove the film from the array - index required
        }
        setFaves(newFaves)
    }

    const filmsToDisplay = filter=== "all" ? films : faves;

    const allFilms = filmsToDisplay.map((film, idx)=> {
        return (
            <FilmRow 
                key={`Film ID: ${idx}`} 
                film={film}
                onFaveToggle={handleFaveToggle}
                isFave={faves.includes(film)}
                handleDetailsClick={handleDetailsClick}
            />
        )
    })

    return (
        <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div 
                        onClick={()=>setFilter('all')} 
                        name="all" 
                        className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
                    >
                        ALL
                        <span className="section-count">{films.length}</span>
                    </div>

                    <div 
                        onClick={()=>setFilter('faves')}
                        name="faves"
                        className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}
                    >
                        FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>
            {allFilms}
            </div>
    )
}
