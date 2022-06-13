import { useState } from 'react'
import FilmRow from './FilmRow'
export default function FilimList(props){
    const [film, setFilter] = useState({filter: 'all'})
    function handleFilterClick(e){
        setFilter({
            filter: e
        })
    }
    const allFilms = props.films.map(film => {
            return (
                <div key={film.id}>
                    <h1><FilmRow film={film} /></h1>
                </div>
            )
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${film.filter === 'all' ? 'is-active' : ''}`} onClick={()=>handleFilterClick('all')}>
                        ALL
                        <span className="section-count">{props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${film.filter === 'faves' ? 'is-active' : ''}`}onClick={()=>handleFilterClick('faves')}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>

                {allFilms}
            </div>

        )
    
}