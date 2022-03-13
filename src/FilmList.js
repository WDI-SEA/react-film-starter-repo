import React, { useState } from 'react';
import FilmRow from './FilmRow';

function FilmList(props) {
    const [filter, handleFilterClick] = useState('all')

    const [faves, setFaves] = useState([])

    const handleFaveToggle = (film) => {
        let newFaves = faves.slice()
        let filmIndex = newFaves.indexOf(film)
        if (filmIndex < 0) {
            newFaves.push(film)
            console.log(`Adding ${film.title} to faves...`)
        } else {
            newFaves.splice(filmIndex, 1)
            console.log(`Removing ${film.title} from faves...`)
        }
        setFaves(newFaves)
    }
    
    // state=({
    //     filter: 'all'
    // })
    
    // handleFilterClick = (status) => {
    //     this.setState({
    //         filter: status
    //     })
    // }

    const filmsToDisplay = filter === 'faves' ? faves : props.films
    
     
    const allFilms = filmsToDisplay.map((film, index) => {
        return (
            <FilmRow key={`film-${index}`} film={film} onFaveToggle={handleFaveToggle} isFave={faves.includes(film)} handleDetailsClick={props.handleDetailsClick}/>
        )
    })

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={()=>handleFilterClick('all')} name="all">
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={()=>handleFilterClick('faves')} name="fave">
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>

            {allFilms}
        </div>
    );
}
 
export default FilmList;