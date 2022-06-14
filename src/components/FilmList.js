import { useState } from 'react'
import FilmRow from './FilmRow'
export default function FilimList(props){
    const [film, setFilter] = useState({filter: 'all'})
    const [faves, setFaves] = useState([])
    function handleFaveToggle(film) {
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        if(filmIndex < 0) {
            console.log(`Adding${film.title} TO FAVES`)
            newFaves = [...newFaves, film]
        } else {
            console.log(`Removing${film.title} FROM FAVES`)
            newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)
    }
    function handleFilterClick(e){
        setFilter({
            filter: e
        })
    }
    const filmsToDisplay =  film.filter === 'all' ? props.films : faves
    const allFilms = filmsToDisplay.map(film => {
            return (
                <div key={film.id}>
                    <h1><FilmRow 
                    film={film} 
                    onFaveToggle={handleFaveToggle}
                    isFave={faves.includes(film)}
                    handleDetailsClick={props.handleDetailsClick}
                    /></h1>
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
                        <span className="section-count">{faves.length}</span>
                    </div>
                </div>

                {allFilms}
            </div>

        )
    
}