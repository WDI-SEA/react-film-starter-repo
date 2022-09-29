import { useState } from 'react'
import './App.css'
import FilmRow from './FilmRow'


function FilmList(props) {
    const [faves, setFaves] = useState([])
    const [filter, setFilter] = useState("all")

    const handleFaveToggle = (film) => {
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)

        if (filmIndex === -1) {
            console.log(`adding ${film.title} to faves`)
            newFaves= [...newFaves, film]
        }
        else if (filmIndex >= 0) {
            console.log(`removing ${film.title} from faves`)
            newFaves.splice(filmIndex, 1)
            
        }
        else {
            console.log("ERROR")
        }
        setFaves(newFaves)
    }

    const handleFilterClick = (filter) => {
        console.log(filter)
        setFilter({filter})
        
    }

    const filmsToDisplay = filter === "all" ? props.films: faves;

    const allFilms = filmsToDisplay.map((film, i) => {
        return (
            <FilmRow 
                key={`filmrow${i}`}
                film={film}
                handleFaveToggle={handleFaveToggle}
                isFave= {faves.includes(film)}
                handleDetailsClick = {props.handleDetailsClick}
            />
        )
    })
     
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${filter === "all" ? "is-active": ""}`}
                         onClick={ () => handleFilterClick("all")}
                    >
                        ALL
                        <span className="section-count">{props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${filter === "faves" ? "is-active": ""}`}
                        onClick={ () => handleFilterClick("faves")}
                    >
                        FAVES
                        <span className="section-count">{faves.length}</span>
                    </div>
                </div>

                {allFilms}
            </div>
            
            )
        
}

export default FilmList