import React, { useState, useEffect } from 'react';
import FilmRow from './FilmRow'
// import { useLayoutEffect } from 'react/cjs/react.production.min';
// import TMDB from './TMDB'
function FilmList(props) {

    const [view, setView] = useState({ filter: 'all' })
    // const [allClass, setAllClass] = useState("film-list-filter")
    // const [favesClass, setFavesClass] = useState("film-list-filter")

    const handleFilterClick = (f) => {
        setView({ filter: f })
        console.log('filter', f)
    }

    useEffect(() => {
        console.log('view is', view)
        console.log('allClass set to', allClass)
        console.log('favesClass set to', favesClass)
    })


    // if view is 'all', string should include 'is-active'
    // else default to 'film-list-filter'
    // should have 2 states
    const allClass = (view.filter === 'all') ? 'film-list-filter is-active' : `film-list-filter` //???
    

    // view is 'faves' ^^
    const favesClass = (view.filter === 'faves') ? "film-list-filter is-active" : "film-list-filter" //???



    const allFilms = props.films.map(film => {
        return (
            <FilmRow film={film} />
        )
    }
    )
    
    return (
        <div className="film-list" >
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters"></div>
            <div className={`${allClass}`} onClick={() => handleFilterClick('all')}>
                ALL
                        <span className="section-count">{props.films.length}</span>
            </div>
            <div className={`${favesClass}`} onClick={() => handleFilterClick('faves')}>
                FAVES
                        <span className="section-count">0</span>
            </div>

            {allFilms}
        </div >
    );

}

export default FilmList //??????????????????