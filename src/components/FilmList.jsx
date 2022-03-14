import React, { useState } from 'react'
import FilmRow from './FilmRow';

const FilmList = ({films, detailsClickHandler}) => {
    const [filter, setFilter] = useState("all")
    const [faveDisplay, setFaveDisplay] = useState([])

    // const handleFilterClick = (name) => {
    //     setFilter({filter: name})
    // }

    const onFaveToggle = (film) => {
        let faveDisplayCopy = [...faveDisplay]
        const filmIndex  = faveDisplayCopy.indexOf(film)
        if(filmIndex < 0) {
            console.log(`adding ${film.title} to faves`)
            faveDisplayCopy.push(film)
        } else {
            console.log(`removing ${film.title} from faves`)
            faveDisplayCopy.splice(filmIndex, 1)
        }
        setFaveDisplay(faveDisplayCopy)
    }

    // const filmTitle = films.map((film, idx) => {
    //     return (
    //         <FilmRow
    //             key={idx}
    //             film={film}
    //             posterUrl={film.poster_path}
    //             faveDisplay={faveDisplay}
    //             isFave={faveDisplay.includes(film)}
    //             onFaveToggle={onFaveToggle}
    //             detailsClickHandler={detailsClickHandler}
    //         />
    //     )
    // })

    const filmsToDisplay = filter === "all" ? films: faveDisplay

    const filmTitle = filmsToDisplay.map((film, idx) => {
        return(
            <FilmRow
                key={idx}
                film={film}
                onFaveToggle={onFaveToggle}
                isFave={faveDisplay.includes(film)}
                detailsClickHandler={detailsClickHandler}
                posterUrl={film.poster_path}
            />
        )
    })
    return(
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div 
                    className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
                    onClick={() => {setFilter("all")}}
                        
                >
                    ALL
                    <span className="section-count">{films.length}</span>
                        
                </div>
                    
                <div 
                    className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}
                    onClick={() => {setFilter("faves")}}
                        
                >
                    FAVES
                    <span className="section-count">{faveDisplay.length}</span>
                </div>
                    
            </div>
            {filmTitle}
        </div>
    )
}
 
export default FilmList;