import FilmRow from './FilmRow'
import { useState } from 'react'

function FilmList(props) {

    const [filter, setFilter] = useState('all')
    // const [faves, setFaves] = useState([])
 
    const handleFilterClick = (type) => {
        // console.log(`a ${type} was clicked`)
        setFilter(type)
    }

    const handleFaveToggle = (film) => {
        let newFaves = [...props.faves]
        const filmIdx = newFaves.indexOf(film)
        if (filmIdx < 0) {
            // console.log(`adding ${film.title} to faves`)
            newFaves = [...newFaves, film]
        } else {
            // console.log(`removing ${film.title} from faves`)
            newFaves.splice(filmIdx, 1)
        }
        props.setFaves(newFaves)
    }

    const filmsToDisplay = filter === 'all' ? props.films : props.faves

    return (
        <div className="film-list">
           <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => { handleFilterClick('all') }}>
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={() => { handleFilterClick('faves') }}>
                    FAVES
                    <span className="section-count">{props.faves.length}</span>
                </div>
            </div>

            {filmsToDisplay.map((film, idx) => {
                return (
                    <FilmRow
                        key={`filmrow${idx}`}
                        film={film}
                        onFaveToggle={handleFaveToggle}
                        isFave={props.faves.includes(film)}
                        handleDetailsClick={props.handleDetailsClick}
                    />
                    )
            })}
        </div>
    )
}

export default FilmList;