import { useState } from 'react'
import FilmRow from './FilmRow'


export default function FilmList(props) {

    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])
  

    const handleFaveToggle = (film) => {
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        console.log(filmIndex)
        if (filmIndex<0) {
            console.log(`ADDING ${film.title} TO FAVES`)
            newFaves = ([...newFaves, film])
            
        } else {
            console.log(`REMOVING ${film.title} FROM FAVES`)
            newFaves.splice(filmIndex, 1)
            console.log(newFaves)
        }
        setFaves(newFaves)
    }

    const handleFilterClick = (filter) => {
        console.log(filter)
        setFilter(filter)
    }
    

    // console.log(this)
    const filmsToDisplay = filter=== "all" ? props.films : faves;
    const allFilms = filmsToDisplay.map((film, i) => {
        return (
        <FilmRow film={film}
                key={`film-${i}`}
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
                    onClick={()=>handleFilterClick('all')}  
                >
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}
                    onClick={()=>handleFilterClick('faves')}
                    >
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>

            {allFilms}
        </div>
    )
    
}