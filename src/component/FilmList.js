
import { useState } from 'react'
import FilmRow from './FilmRow'

// export default class FilmList extends Component {

//     state = {
//         filter: 'all'
//     }
    
//     handleFilterClick = (e) =>{
//         this.setState({
//             filter: e
//         })
        
//     }

//     render() {

//         return (

//         )
//     }
// }

export default function FilmList(props) {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])
    const handleFilterClick = (filter) => {
        setFilter(filter)
    }
    const handleFaveToggle = (film) => {
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        // refactor to if else later
        if (filmIndex === -1) {
            newFaves = [...newFaves, film];
        } else {
            newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)
    }
    const filmsToDisplay = filter === "all" ? props.films : faves
    const allFilms = filmsToDisplay.map((film) => {
        return (
            <FilmRow
                key={film.id}
                film={film}
                onFaveToggle={handleFaveToggle}
                isFave={faves.includes(film)}
                onDetailsClick={props.onDetailsClick}
            />
        )
    })
    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div
                    onClick={() => handleFilterClick('all')}
                    className={`film-list-filter ${filter === "all" ? 'is-active' : ''}`}
                >
                    ALL
                    <span className="section-count">{props.movies.length}</span>
                </div>
                <div
                    onClick={() => handleFilterClick('faves')}
                    className={`film-list-filter ${filter !== "all" ? 'is-active' : ''}`}
                >
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>

            {allFilms}
        </div>
    )
}