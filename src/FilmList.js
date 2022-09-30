import { useState } from 'react'
import FilmRow from './FilmRow'


export default function FilmList(props) {

    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    const handleFilterClick = filter => {
        console.log('handling filter click:', filter)
        setFilter(filter)
    }

    const handleFaveToggle = film => {
        const newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        // if the filmIndex is less than 0, we need to add the film to the newFaves, otherwise we would need to remove the filme from the newFaves array
        if (filmIndex < 0) {
            console.log(`ADDING ${film.title} to the newFaves`)
            setFaves([...newFaves, film])
        } else {
            console.log(`REMOVING ${film.title} from the newFaves`)
            // .splice(where to start splicing, how many to splice)
            newFaves.splice(filmIndex, 1)
            setFaves(newFaves)
        }
    }

    const filmsToDisplay = filter === 'all' ? props.films : faves

    const allFilms = filmsToDisplay.map((film, i) => {
        return (
            <FilmRow 
                key={`filmrow${i}`}
                film={film}
                // whyyyyy
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
                    onClick={() => handleFilterClick('all')}
                >
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'fave' ? 'is-active' : ''}`}
                    onClick={() => handleFilterClick('fave')}
                >
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>

            {allFilms}
        </div>
    )
}