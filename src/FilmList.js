import FilmRow from './FilmRow'
import { useState } from 'react'

export default function FilmList(props) {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])
    const [isFave, setIsFave] = useState(false)

    const handleFilterClick = (filter)=> {
        setFilter(filter)
    }

    const handleFaveToggle = (film) =>{
        const newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        if(filmIndex < 0){
            console.log(`Adding ${film.title}`)
            setFaves([...newFaves, film])
        } else {
            console.log(`Removing ${film.title}`)
            newFaves.splice(filmIndex, 1)
            setFaves(newFaves)
        }
    }
    const filmsToDisplay = filter === 'all' ? props.films : faves

    const allFilms = props.films.map((film, i)=>{
            return (
            <FilmRow 
                key={`filmrow${i}`} 
                film={film} 
                isFave={isFave}
                onFaveToggle={handleFaveToggle}
            />
        )
    })

        return(
            <div className="film-list">
                <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    <div className="film-list-filters">
                        <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={()=>handleFilterClick('all')}>
                            ALL
                            <span className="section-count">{props.films.length}</span>
                        </div>
                        <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={()=>handleFilterClick('faves')}>
                            FAVES
                            <span className="section-count">{faves.length}</span>
                        </div>
                    </div>

                    {allFilms}
                </div>
            </div>
        )
}