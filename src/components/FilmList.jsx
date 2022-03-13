import React, { useState } from 'react'
import FilmRow from './FilmRow';

const FilmList = ({films, detailsClickHandler}) => {
    const [filter, setFilter] = useState("all")
    const [faveDisplay, setFaveDisplay] = useState([])

    const handleFilterClick = (name) => {
        setFilter({filter: name})
    }

    const onFaveToggle = (film) => {
        let faveDisplayCopy = [...faveDisplay]
        const filmIndex  = faveDisplayCopy.indexOf(film)
        if(!filmIndex) {
            faveDisplayCopy.push(film)
        } else {
            faveDisplayCopy.splice(filmIndex, 1)
        }
        setFaveDisplay(faveDisplayCopy)
    }

    const filmTitle = films.map((film, idx) => {
        return (
            <FilmRow
                key={idx}
                film={film}
                posterUrl={film.poster_path}
                faveDisplay={faveDisplay}
                isFave={faveDisplay.includes(film)}
                onFaveToggle={onFaveToggle}
                detailsClickHandler={detailsClickHandler}
            />
        )
    })
    return(
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div 
                    className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
                    onClick={() => {handleFilterClick("all")}}
                        
                >
                    ALL
                    <span className="section-count">{films.length}</span>
                        
                </div>
                    
                <div 
                    className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}
                    onClick={() => {handleFilterClick("faves")}}
                        
                >
                    FAVES
                    <span className="section-count">0</span>
                </div>
                    
            </div>
            {filmTitle}
        </div>
    )
}
 
export default FilmList;