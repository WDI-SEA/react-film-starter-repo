import FilmRow from './FilmRow'
import { useState } from 'react'

export default function FilmList(props) {
    // use array destructuring for state in a function
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    const handleFaveToggle = film => {
        console.log('fave this film:', film)

        const newFaves = [...faves]
        const filmIndex = faves.indexOf(film)
        if (filmIndex === -1) {
            setFaves([...faves, film])
            console.log('adding', film)
        } else {
            newFaves.splice(filmIndex, 1)
            setFaves(newFaves)
            console.log('removing', film)
        }
    }
    // Great example to study for interviews on the basis of an example of a closure of scope. 
    // const allFilms = props.films.map((film, i) => {
    //     return (
    //         <FilmRow
    //             key={`filmrow${i}`}
    //             film={film}
    //             // closure of scope
    //             handleFaveToggle={() => handleFaveToggle(film)}
    //             isFave={faves.includes(film)}
    //         />
    //     )
    // })

    const filmsToDisplay = filter === 'all' ? props.films : faves

    const allFilms = filmsToDisplay.map((film, i) => {
        return (
            <FilmRow
                key={`filmrow${i}`}
                film={film}
                // closure of scope
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