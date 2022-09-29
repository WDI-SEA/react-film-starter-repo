import FilmRow from './FilmRow'
import { useState } from 'react'

function FilmList(props) {
    const [filter, setFilter] = useState('all')
    const [fave, setFave] = useState([])

    let handleFilterClick = (filter) => {
        setFilter(filter)
    }

    let handleFaveToggle = (e) => {
        console.log('fave toggle')
        setFave([e, ...fave])
    }

        const allFilms = props.films.map((film, i) => {
            return(
                <div>
                    <FilmRow 
                    key={`filmrow${i}`}
                    film={film}
                    />
                </div>
            )
        })
    
    return(
    
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={()=>handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={()=>handleFilterClick('faves')}>
                    FAVES
                    <span className="section-count">0</span>
                </div>
            </div>

            {allFilms}
        </div>   
        
    )
    
}

export default FilmList